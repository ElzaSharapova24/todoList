import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
`;

export const ContentWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 15px;
    padding-bottom: 20px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainTitle = styled.h1`
    font-size: 32px;
    color: #081961;
    text-align: center;
`;


export const Button = styled.button`
    padding: 8px;
    background-color: #096885;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
    transition: outline 0.3s ease-in-out;

    &:hover {
        outline-offset: 2px;
        outline: 1px solid #096885;
    }
`;

