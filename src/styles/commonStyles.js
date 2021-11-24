import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 25px 25px 16px 25px;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 26px;
    line-height: 30.52px;
    color: white;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: white;
    padding-left: 15px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 23.48px;
`;

const Button = styled.button`
    width: 100%;
    height: 46px;
    border-radius: 5px;
    border: none;
    background-color: #ae28d6;
    color: white;
    font-weight: bold;
    font-size: 20px;
    line-height: 23.48px;
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export { Title, MainContainer, Input, Button };
