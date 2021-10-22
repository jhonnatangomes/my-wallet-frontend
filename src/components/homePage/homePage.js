import { MainContainer, Title } from "../../styles/commonStyles";
import { TitleContainer, ButtonsContainer, Button } from "./homePageStyle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import MoneyLedger from "../moneyLedger/moneyLedger";
import exitIcon from "../../assets/exitIcon.png";
import plusIcon from "../../assets/plusIcon.png";
import minusIcon from "../../assets/minusIcon.png";
import { logout } from "../../api/api";

export default function HomePage() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));

    function handleLogout() {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const promise = logout(config);
        promise
            .then(() => {
                localStorage.removeItem("user");
                history.push("/sign-in");
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

    return (
        <MainContainer>
            <TitleContainer>
                <Title>Olá, {user.name}</Title>
                <img onClick={handleLogout} src={exitIcon} alt="" />
            </TitleContainer>
            <MoneyLedger user={user} />
            <ButtonsContainer>
                <Link to="/deposit">
                    <Button>
                        <div>
                            <img src={plusIcon} alt="" />
                            <span>
                                Nova <br />
                                entrada
                            </span>
                        </div>
                    </Button>
                </Link>
                <Link to="/withdrawal">
                    <Button>
                        <div>
                            <img src={minusIcon} alt="" />
                            <span>
                                Nova <br />
                                saída
                            </span>
                        </div>
                    </Button>
                </Link>
            </ButtonsContainer>
        </MainContainer>
    );
}
