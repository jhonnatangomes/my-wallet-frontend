import { MainContainer, Title } from "../../styles/commonStyles";
import { useLocation } from "react-router";
import { InputContainer, Input, Button } from "./depositAndWithdrawalStyle";

export default function DepositAndWithdrawal() {
    const path = useLocation().pathname;
    return (
        <MainContainer>
            <Title>Nova {path === "/deposit" ? "entrada" : "saída"}</Title>
            <InputContainer>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
            </InputContainer>
            <Button>Salvar {path === "/deposit" ? "entrada" : "saída"}</Button>
        </MainContainer>
    );
}
