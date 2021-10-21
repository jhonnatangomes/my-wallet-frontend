import { Ledger, LineContainer, NoRecords } from "./moneyLedgerStyle";
import Funds from "./funds";
import { useState, useEffect } from "react";
import { getEntries } from "../../api/api";
import Lines from "./lines";

export default function MoneyLedger({ userId }) {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                userId,
            },
        };
        const promise = getEntries(config);
        promise.then((res) => {
            setEntries(res.data);
        });
    }, []);

    return (
        <Ledger entries={entries.length}>
            {entries.length ? (
                <>
                    <LineContainer>
                        {entries.map((entry, i) => (
                            <Lines key={i} entries={entry} />
                        ))}
                    </LineContainer>
                    {entries.length ? <Funds total={entries[0].sum} /> : ""}
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
