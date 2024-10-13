import styled from "styled-components";

export const TaskItemContainer = styled.div`
    background-color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;

    &:hover .edit-icon, &:hover .delete-icon {
        visibility: visible;
    }
`;

export const TaskText = styled.span`
    word-wrap: break-word; 
    word-break: break-all;
    overflow-wrap: anywhere; 
    max-width: 100%; 
    display: block; 
`;

export const IconButton = styled.span`
    visibility: hidden;
    cursor: pointer;
    margin-left: 10px;
`;