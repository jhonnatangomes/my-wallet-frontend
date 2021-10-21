import { MainContainer, Title } from "../../styles/commonStyles";
import { TitleContainer, ButtonsContainer, Button } from "./homePageStyle";
import { Link } from "react-router-dom";
import MoneyLedger from "../moneyLedger/moneyLedger";
import exitIcon from "../../assets/exitIcon.png";
import plusIcon from "../../assets/plusIcon.png";
import minusIcon from "../../assets/minusIcon.png";

export default function HomePage({ userId }) {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>Olá, fulano</Title>
                <img src={exitIcon} alt="" />
            </TitleContainer>
            <MoneyLedger userId={userId} />
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
