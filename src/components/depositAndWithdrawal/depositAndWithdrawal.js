import { useState } from "react";
import { useLocation, useHistory } from "react-router";
import { MainContainer, Title } from "../../styles/commonStyles";
import { Form } from "./depositAndWithdrawalStyle";
import { Input, Button } from "../../styles/commonStyles";
import { postEntry } from "../../api/api";

export default function DepositAndWithdrawal() {
    const path = useLocation().pathname;
    const history = useHistory();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [decimalPlace, setDecimalPlace] = useState("");

    if (!localStorage.user) {
        history.push("/sign-in");
        return null;
    }
    const user = JSON.parse(localStorage.getItem("user"));

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            description,
            value: path === "/withdrawal" ? "-" + value : value,
        };
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        if (body.value.includes(",")) {
            if (!decimalPlace) {
                body.value = Number(body.value.replace(",", "") + "00");
            } else if (decimalPlace && decimalPlace.length === 1) {
                body.value = Number(body.value.replace(",", "") + "0");
            } else {
                body.value = Number(body.value.replace(",", ""));
            }
        } else {
            body.value *= 100;
        }
        const promise = postEntry(body, config);
        promise
            .then(() => {
                path === "/deposit"
                    ? alert("Entrada registrada com sucesso")
                    : alert("Saída registrada com sucesso");
                history.push("/");
            })
            .catch((err) => console.log(err));
    }

    function handleValue(e) {
        const matchRegex = e.target.value.match(/^\d+,?(\d{1,2})?$/);
        if (matchRegex || e.target.value === "") {
            if (matchRegex) {
                setDecimalPlace(matchRegex[1]);
            }
            setValue(e.target.value);
        }
    }
    return (
        <MainContainer>
            <Title>Nova {path === "/deposit" ? "entrada" : "saída"}</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Valor"
                    value={value}
                    onChange={handleValue}
                    required
                />
                <Input
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Button type="submit">
                    Salvar {path === "/deposit" ? "entrada" : "saída"}
                </Button>
            </Form>
        </MainContainer>
    );
}
