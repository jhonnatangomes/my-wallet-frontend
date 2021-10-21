import styled from "styled-components";

const Ledger = styled.div`
    width: 100%;
    height: 446px;
    background-color: white;
    border-radius: 5px;
    margin-top: 22px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    justify-content: ${({ entries }) => (entries ? "none" : "center")};
    align-items: center;
    padding: 23px 11px 10px 12px;
    position: relative;
`;

const NoRecords = styled.span`
    font-size: 20px;
    line-height: 23.48px;
    color: #868686;
    text-align: center;
`;

const LineContainer = styled.div`
    width: 100%;
    height: 380px;
    overflow: auto;
`;

const FundsStyle = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0px;
    padding: 0px 11px 0px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    line-height: 19.96px;

    & span:first-child {
        font-weight: bold;
    }

    & span:last-child {
        color: ${({ positive }) => (positive ? "#03ac00" : "#c70000")};
    }
`;

export { Ledger, NoRecords, LineContainer, FundsStyle };
