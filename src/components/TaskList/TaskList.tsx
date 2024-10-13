import TaskItem from "./TaskItem/TaskItem.tsx";
import {Task} from "../../models/Task.ts";
import {TaskListContainer} from "./TaskList.styles.ts";


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
