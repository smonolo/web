import styled from "styled-components";
import { Anchor, Box, Text, Title } from "../../styles";

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Item = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 22px;
    font-weight: 500;
    justify-content: space-between;

    ${Anchor} {
        font-size: 35px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        box-sizing: border-box;
        transition: border-color .2s ease-in-out;

        &:hover {
            border-color: #008cff;
        }
    }

    ${Text} {
        color: #505050;
        font-size: 25px;
    }

    &:first-child {
        border-top: 1px solid #303030;
    }

    &:last-child {
        border-bottom: 1px solid #303030;
    }

    &:nth-child(even) {
        background-color: #008cff;
        width: 100%;
        padding: 20px;
        border-radius: 10px;

        ${Anchor} {
            color: #ffffff;

            &:hover {
                border-color: #191919;
            }

            &::selection {
                background: #000000;
            }
        }

        ${Text} {
            color: #e0e0e0;

            &::selection {
                background: #000000;
            }
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 5px;

        ${Anchor} {
            font-size: 30px;
        }

        ${Text} {
            font-size: 20px;
        }

        &:nth-child(even) {
            width: 100%;
        }
    }
`;

export const ContactBox = styled(Box)`
    ${Title} {
        font-size: 35px;
    }

    ${Anchor} {
        color: #008cff;
    }
`;