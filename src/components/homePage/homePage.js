import { MainContainer, Title } from "../../styles/commonStyles";
import { TitleContainer, ButtonsContainer, Button } from "./homePageStyle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import MoneyLedger from "../moneyLedger/moneyLedger";
import exitIcon from "../../assets/exitIcon.png";
import plusIcon from "../../assets/plusIcon.png";
import minusIcon from "../../assets/minusIcon.png";

export default function HomePage() {
    const history = useHistory();
    if (!localStorage.user) {
        history.push("/sign-in");
        return null;
    }
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <MainContainer>
            <TitleContainer>
                <Title>Olá, {user.name}</Title>
                <img src={exitIcon} alt="" />
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
