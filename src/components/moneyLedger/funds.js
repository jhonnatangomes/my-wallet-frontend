import { FundsStyle } from "./moneyLedgerStyle";

export default function Funds({ total }) {
    const positive = !total.includes("-");
    const totalFormatted = total.replace("-", "");
    return (
        <FundsStyle positive={positive}>
            <span>Saldo</span>
            <span>
                {totalFormatted.slice(0, -2) + "," + totalFormatted.slice(-2)}
            </span>
        </FundsStyle>
    );
}
