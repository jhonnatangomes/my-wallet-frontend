import { Ledger, LedgerDetails, NoRecords } from "./moneyLedgerStyle";
import Lines from "./lines";

export default function MoneyLedger() {
    const entries = [
        {
            date: "20/11",
            description: "Empréstimo Maria",
            value: "50000",
        },
        {
            date: "15/11",
            description: "Salário",
            value: "300000",
        },
    ];
    return (
        <Ledger entries={entries.length}>
            {entries.length ? (
                <>
                    <Lines entries={entries[0]} />
                    <Lines entries={entries[1]} />
                </>
            ) : (
                <NoRecords>
                    Não há registros de <br />
                    entrada ou saída
                </NoRecords>
            )}
        </Ledger>
    );
}
