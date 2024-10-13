import styled from 'styled-components';
import TaskItem from "./TaskItem/TaskItem.tsx";
import {Task} from "../../models/Task.ts";

const TaskListContainer = styled.div``;

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (task: Task) => void;
}

const TaskList = ({tasks, onEdit, onDelete}: TaskListProps) => {
    return (
        <TaskListContainer>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete}/>
            ))}
        </TaskListContainer>
    );
};

export default TaskList;
