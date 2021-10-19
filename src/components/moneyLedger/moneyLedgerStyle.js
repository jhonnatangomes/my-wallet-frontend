import styled from "styled-components";

const Ledger = styled.div`
    width: 100%;
    min-height: 446px;
    background-color: white;
    border-radius: 5px;
    margin-top: 22px;
    margin-bottom: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoRecords = styled.span`
    font-size: 20px;
    line-height: 23.48px;
    color: #868686;
    text-align: center;
`;

export { Ledger, NoRecords };
