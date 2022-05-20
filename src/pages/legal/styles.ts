import styled from "styled-components";
import { Title, Text, Anchor, Box } from "../../styles";

export const  Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const  Column = styled.div`
    width: 100%;
`;

export const  BlueBox = styled(Box)`
    background-color: #008cff;
    padding: 30px;

    ${Title} {
        color: #ffffff;
        font-size: 30px;
    }

    ${Text} {
        color: #e5e5e5;
    }

    ${Anchor} {
        color: #ffffff;
        text-decoration: underline;
    }
`;