import styled from "styled-components";

export const TaskItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ddd;

    &:hover .edit-icon, &:hover .delete-icon {
        visibility: visible;
    }
`;

export const TaskText = styled.span``;

export const IconButton = styled.span`
    visibility: hidden;
    cursor: pointer;
    margin-left: 10px;
`;