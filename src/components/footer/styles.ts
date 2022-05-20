import styled from "styled-components";

export const Spacer = styled.div`
    width: 100%;
    height: 100px;
`;

export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
    box-sizing: border-box;
    border-top: 2px solid #353535;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Column = styled.div`
    width: fit-content;
`;

export const Links = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;