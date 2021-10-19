import { Ledger, NoRecords } from "./moneyLedgerStyle";

export default function MoneyLedger() {
    return (
        <Ledger>
            <NoRecords>
                Não há registros de <br />
                entrada ou saída
            </NoRecords>
        </Ledger>
    );
}
