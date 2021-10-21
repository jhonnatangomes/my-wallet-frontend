import { Ledger, LineContainer, NoRecords } from "./moneyLedgerStyle";
import Funds from "./funds";
import { useState, useEffect } from "react";
import { getEntries, getFunds } from "../../api/api";
import Lines from "./lines";

export default function MoneyLedger({ userId }) {
    const [entries, setEntries] = useState([]);
    const [funds, setFunds] = useState("");

    useEffect(() => {
        const config = {
            headers: {
                userId,
            },
        };
        const entriesRequest = getEntries(config);
        const fundsRequest = getFunds(config);
        entriesRequest.then((res) => {
            setEntries(res.data);
        });
        fundsRequest.then((res) => {
            setFunds(res.data);
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
                    {funds ? <Funds total={funds} /> : ""}
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
