import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0 25px;
`;

const Title = styled.span`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    line-height: 50.37px;
    color: white;
    text-align: center;
    margin-bottom: ${({ path }) => (path === '/sign-in' ? '24px' : '28px')};
`;

const Form = styled.form`
    input {
        margin-bottom: 13px;
    }
`;

const Span = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 17.61px;
    color: white;
    text-align: center;
    margin-top: ${({ path }) => (path === '/sign-in' ? '36px' : '32px')};

    a {
        text-decoration: none;
        color: inherit;
        cursor: inherit;
    }
`;

export { LoginContainer, Title, Form, Span };
