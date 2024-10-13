import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f0f4f8;
    color: #333;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

    max-width: 1200px;
    margin: 0 auto;
`;

export const ContentWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 15px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

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
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1); 
    }
`;

