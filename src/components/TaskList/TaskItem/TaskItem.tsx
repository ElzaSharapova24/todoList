import {Task} from "../../../models/Task.ts";
import {IconButton, TaskItemContainer, TaskText} from "./TaskItem.styles.ts";


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
