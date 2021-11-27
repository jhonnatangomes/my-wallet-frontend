import { FundsStyle } from './moneyLedgerStyle';

export default function Funds({ total }) {
    const positive = !total.includes('-');
    const totalFormatted = total.replace('-', '').replace('.', ',');
    return (
        <FundsStyle positive={positive}>
            <span>Saldo</span>
            <span>{totalFormatted}</span>
        </FundsStyle>
    );
}
