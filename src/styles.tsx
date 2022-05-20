import styled, { createGlobalStyle } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Rokkitt', sans-serif;
    }

    *::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #252525;
        border-radius: 5px;
    }

    *::selection {
        background: #008cff;
        color: #ffffff;
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: #131313;
        min-height: 100vh;
        position: relative;
    }

    #root {
        height: 100%;
    }
`;

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;

    @media (max-width: 800px) {
        width: 90%;
    }
`;

export const Heading = styled.div`
    font-size: 90px;
    font-weight: 500;
    color: #ffffff;

    @media (max-width: 800px) {
        font-size: 70px;
    }
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    color: #ffffff;

    @media (max-width: 800px) {
        font-size: 30px;
    }
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;

    @media (max-width: 800px) {
        font-size: 18px;
    }
`;

export const Box = styled.div`
    width: 100%;
    border-radius: 10px;
    padding: 45px;
    background-color: #e0e0e0;
    box-sizing: border-box;

    ${Title}, ${Text} {
        color: #191919;
    }
`;

export const Spacer = styled.div<{ margin?: number; }>`
    margin-top: ${({ margin }) => margin || 20}px;
`;

export const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: inherit;
`;

export const Link = styled(RouterLink)`
    color: #008cff;
    text-decoration: none;
    font-size: inherit;
`;