import { Link } from "react-router-dom";
import styled from "styled-components";

export const Spacer = styled.div`
    margin-bottom: 40px;
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    padding: 30px 0;
    box-sizing: border-box;
    border-bottom: 2px solid #353535;
`;

export const Column = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    &:first-child {
        justify-content: flex-start;
    }

    &:last-child {
        justify-content: flex-end;
    }
`;

export const Item = styled(Link) <{ active: boolean; }>`
    font-size: 26px;
    font-weight: 500;
    color: #f0f0f0;
    display: block;
    text-decoration: none;
    transition: color .2s ease-in-out, border-color .2s ease-in-out;
    border-bottom: 2px solid #ffffff;
    box-sizing: border-box;

    ${({ active }) => active ? 'border-color: #008cff;' : ''}
    
    &:hover {
        color: #ffffff;
    }

    @media (max-width: 800px) {
        font-size: 22px;
    }
`;