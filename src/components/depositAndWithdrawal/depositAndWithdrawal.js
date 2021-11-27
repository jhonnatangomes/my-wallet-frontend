import { useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { MainContainer, Title } from '../../styles/commonStyles';
import { Form } from './depositAndWithdrawalStyle';
import { Input, Button } from '../../styles/commonStyles';
import { postEntry } from '../../api/api';
import UserContext from '../../contexts/userContext';

export default function DepositAndWithdrawal() {
    const path = useLocation().pathname;
    const history = useHistory();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        const formattedValue =
            path === '/withdrawal'
                ? '-' + value.replace(',', '.')
                : value.replace(',', '.');
        const body = {
            description,
            value: Number(formattedValue),
        };
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const promise = postEntry(body, config);
        promise
            .then(() => {
                path === '/deposit'
                    ? alert('Entrada registrada com sucesso')
                    : alert('Saída registrada com sucesso');
                history.push('/');
            })
            .catch((err) => console.log(err));
    }

    function handleValue(e) {
        const matchRegex = e.target.value.match(/^\d+,?(\d{1,2})?$/);
        if (matchRegex || e.target.value === '') {
            setValue(e.target.value);
        }
    }
    return (
        <MainContainer>
            <Title>Nova {path === '/deposit' ? 'entrada' : 'saída'}</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Valor"
                    value={value}
                    onChange={handleValue}
                    required
                />
                <Input
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Button type="submit">
                    Salvar {path === '/deposit' ? 'entrada' : 'saída'}
                </Button>
            </Form>
        </MainContainer>
    );
}
