import { MainContainer, Title } from "../../styles/commonStyles";
import { TitleContainer, ButtonsContainer, Button } from "./homePageStyle";
import MoneyLedger from "../moneyLedger/moneyLedger";
import exitIcon from "../../assets/exitIcon.png";
import plusIcon from "../../assets/plusIcon.png";
import minusIcon from "../../assets/minusIcon.png";

export default function HomePage() {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>Olá, fulano</Title>
                <img src={exitIcon} alt="" />
            </TitleContainer>
            <MoneyLedger />
            <ButtonsContainer>
                <Button>
                    <div>
                        <img src={plusIcon} alt="" />
                        <span>
                            Nova <br />
                            entrada
                        </span>
                    </div>
                </Button>
                <Button>
                    <div>
                        <img src={minusIcon} alt="" />
                        <span>
                            Nova <br />
                            saída
                        </span>
                    </div>
                </Button>
            </ButtonsContainer>
        </MainContainer>
    );
}
