import styled from "styled-components";

export const DialogOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Dialog = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    display: flex;
    flex-direction: column;
`;

export const TextField = styled.input`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:nth-child(1) {
        background-color: #f0f0f0;
    }

    &:nth-child(2) {
        background-color: #007bff;
        color: white;
    }
`;
