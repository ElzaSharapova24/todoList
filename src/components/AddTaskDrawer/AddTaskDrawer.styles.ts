import styled from "styled-components";

export const Drawer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const TextField = styled.input`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
`;

export const AddButton = styled.button`
    padding: 8px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;

    &:disabled {
        background-color: grey;
    }
`;
