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

export const TextField = styled.input<{ error?: boolean }>`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
    border-radius: 5px;
    transition: border 0.3s ease-in-out;

    &:hover {
        border: 1px solid #096885;
    }
    
`;

export const AddButton = styled.button`
    padding: 8px;
    background-color: #3838b8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;

    &:disabled {
        background-color: grey;
    }
    
`;

export const CloseButton = styled.button`
    padding: 8px;
    background-color: #088849;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;

`;

export const ErrorMessage = styled.p`
    color: red;
    margin-top: -12px; 
    margin-bottom: 5px; 
    font-size: 14px;
`;
