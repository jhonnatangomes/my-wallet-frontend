import { Ledger, LineContainer, NoRecords } from './moneyLedgerStyle';
import Funds from './funds';
import { useState, useEffect } from 'react';
import { getEntries } from '../../api/api';
import Line from './line';

export default function MoneyLedger({ user }) {
    const [entries, setEntries] = useState([]);
    const [funds, setFunds] = useState('');

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const request = getEntries(config);
        request.then((res) => {
            setEntries(res.data.entries);
            setFunds(res.data.sum);
        });
    }, []);

    return (
        <Ledger entries={entries.length}>
            {entries.length ? (
                <>
                    <LineContainer>
                        {entries.map((entry, i) => (
                            <Line key={i} entries={entry} />
                        ))}
                    </LineContainer>
                    {funds ? <Funds total={funds} /> : ''}
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
