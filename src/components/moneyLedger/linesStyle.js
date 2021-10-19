import styled from "styled-components";

const LineContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 18.78px;
    margin-bottom: 20px;

    & > span:last-child {
        color: #03ac00;
    }
`;

const DateAndDescription = styled.div`
    span:first-child {
        margin-right: 10px;
        color: #c6c6c6;
    }
`;

export { LineContainer, DateAndDescription };
