import styled from "styled-components";

const Line = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 18.78px;
    margin-bottom: 20px;
`;

const DateAndDescription = styled.div`
    span:first-child {
        margin-right: 10px;
        color: #c6c6c6;
    }
`;

const Value = styled.span`
    color: ${({ positive }) => (positive ? "#03ac00" : "#c70000")};
`;

export { Line, DateAndDescription, Value };
