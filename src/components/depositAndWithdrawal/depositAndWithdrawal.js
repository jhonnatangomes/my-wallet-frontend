import { useState } from "react";
import { useLocation, useHistory } from "react-router";
import { MainContainer, Title } from "../../styles/commonStyles";
import { Form } from "./depositAndWithdrawalStyle";
import { Input, Button } from "../../styles/commonStyles";
import { postEntry } from "../../api/api";

export default function DepositAndWithdrawal({ userId }) {
    const path = useLocation().pathname;
    const history = useHistory();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [decimalPlace, setDecimalPlace] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            userId,
            description,
            value: path === "/withdrawal" ? "-" + value : value,
        };
        if (value.includes(",")) {
            if (!decimalPlace) {
                body.value = Number(value.replace(",", "") + "00");
            } else if (decimalPlace && decimalPlace.length === 1) {
                body.value = Number(value.replace(",", "") + "0");
            } else {
                body.value = Number(value.replace(",", ""));
            }
        } else {
            body.value *= 100;
        }
        const promise = postEntry(body);
        promise.then(() => {
            path === "/deposit"
                ? alert("Entrada registrada com sucesso")
                : alert("Saída registrada com sucesso");
            history.push("/");
        });
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
