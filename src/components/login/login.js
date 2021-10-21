import { useLocation } from "react-router";
import { useState } from "react";
import { LoginContainer, Title, Form, Span } from "./loginStyle";
import { Input, Button } from "../../styles/commonStyles";
import { Link } from "react-router-dom";

export default function Login() {
    const path = useLocation().pathname;
    const [inputs, setInputs] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        if (path === "/sign-up") {
            const body = {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                repeatPassword: inputs.repeatPassword,
            };
            console.log(body);
        }
    }
    return (
        <LoginContainer>
            <Title path={path}>MyWallet</Title>
            <Form onSubmit={handleSubmit}>
                {path === "/sign-up" ? (
                    <Input
                        placeholder="Nome"
                        value={inputs.name || ""}
                        onChange={(e) =>
                            setInputs({ ...inputs, name: e.target.value })
                        }
                        required
                    />
                ) : (
                    ""
                )}
                <Input
                    placeholder="E-mail"
                    type="email"
                    value={inputs.email || ""}
                    onChange={(e) =>
                        setInputs({ ...inputs, email: e.target.value })
                    }
                    required
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    value={inputs.password || ""}
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                    required
                />
                {path === "/sign-up" ? (
                    <Input
                        placeholder="Confirme a senha"
                        type="password"
                        value={inputs.repeatPassword || ""}
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                repeatPassword: e.target.value,
                            })
                        }
                        required
                    />
                ) : (
                    ""
                )}
                <Button type="submit">
                    {path === "/sign-in" ? "Entrar" : "Cadastrar"}
                </Button>
            </Form>
            <Span path={path}>
                {path === "/sign-in" ? (
                    <Link to="/sign-up">Primeira vez? Cadastre-se</Link>
                ) : (
                    <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
                )}
            </Span>
        </LoginContainer>
    );
}
