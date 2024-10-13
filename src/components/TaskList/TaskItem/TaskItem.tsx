import styled from 'styled-components';
import {Task} from "../../../models/Task.ts";

const TaskItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ddd;

    &:hover .edit-icon, &:hover .delete-icon {
        visibility: visible;
    }
`;

const TaskText = styled.span``;

const IconButton = styled.span`
    visibility: hidden;
    cursor: pointer;
    margin-left: 10px;
`;


interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (task: Task) => void;
}

const TaskItem = ({task, onEdit, onDelete}: TaskItemProps) => {
    return (
        <TaskItemContainer>
            <TaskText>{task.text}</TaskText>
            <div>
                <IconButton className="edit-icon" onClick={() => onEdit(task)}>✏️</IconButton>
                <IconButton className="delete-icon" onClick={() => onDelete(task)}>🗑️</IconButton>
            </div>
        </TaskItemContainer>
    );
};

export default TaskItem;
