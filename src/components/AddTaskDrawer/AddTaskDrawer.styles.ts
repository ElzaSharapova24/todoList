import styled from "styled-components";

export const Drawer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
`;

export const TodoListHeader = styled.h2`
  font-size: 24px;
  color: #081961;
  margin-bottom: 20px;
  text-align: center;
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
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
    transition: transform 0.5s ease-in-out;

    &:disabled {
        background-color: grey;
    }
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const CloseButton = styled.button`
    padding: 8px;
    background-color: #088849;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;
