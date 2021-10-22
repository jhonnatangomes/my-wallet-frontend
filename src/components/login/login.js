import { useLocation, useHistory } from "react-router";
import { useState } from "react";
import { LoginContainer, Title, Form, Span } from "./loginStyle";
import { Input, Button } from "../../styles/commonStyles";
import { Link } from "react-router-dom";
import { Ellipsis } from "react-spinners-css";
import { signUp, signIn } from "../../api/api";

export default function Login() {
    const path = useLocation().pathname;
    const history = useHistory();
    const [inputs, setInputs] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (path === "/sign-up") {
            const body = {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                repeatPassword: inputs.repeatPassword,
            };
            setIsLoading(true);
            const promise = signUp(body);
            promise
                .then(() => {
                    alert("Usuário cadastrado com sucesso");
                    setIsLoading(false);
                    history.push("/sign-in");
                })
                .catch((err) => {
                    handleError(err);
                });
        } else {
            const body = {
                email: inputs.email,
                password: inputs.password,
            };
            setIsLoading(true);
            const promise = signIn(body);
            promise
                .then((res) => {
                    setIsLoading(false);
                    localStorage.setItem("user", JSON.stringify(res.data));
                    history.push("/");
                })
                .catch((err) => handleError(err));
        }
    }

    function handleError(err) {
        if (
            err.response.status === 400 ||
            err.response.status === 401 ||
            err.response.status === 409
        ) {
            alert(err.response.data);
        } else {
            alert("Algo inesperado aconteceu");
        }
        setIsLoading(false);
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
                        disabled={isLoading}
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
                    disabled={isLoading}
                    required
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    value={inputs.password || ""}
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                    disabled={isLoading}
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
                        disabled={isLoading}
                        required
                    />
                ) : (
                    ""
                )}
                <Button type="submit">
                    {isLoading ? (
                        <Ellipsis color="white" />
                    ) : path === "/sign-in" ? (
                        "Entrar"
                    ) : (
                        "Cadastrar"
                    )}
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
