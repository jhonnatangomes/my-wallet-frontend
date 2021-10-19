import styled from "styled-components";

const InputContainer = styled.div`
    margin-top: 40px;

    input {
        margin-bottom: 13px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: white;
    padding-left: 15px;
    font-family: "Raleway", sans-serif;
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
    font-family: "Raleway", sans-serif;
    cursor: pointer;
`;

export { InputContainer, Input, Button };
