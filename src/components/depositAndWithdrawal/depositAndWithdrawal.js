import { useState } from "react";
import { useLocation } from "react-router";
import { MainContainer, Title } from "../../styles/commonStyles";
import { Form, Input, Button } from "./depositAndWithdrawalStyle";

export default function DepositAndWithdrawal() {
    const path = useLocation().pathname;
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ value, description });
    }
    return (
        <MainContainer>
            <Title>Nova {path === "/deposit" ? "entrada" : "saída"}</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Input
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button type="submit">
                    Salvar {path === "/deposit" ? "entrada" : "saída"}
                </Button>
            </Form>
        </MainContainer>
    );
}
