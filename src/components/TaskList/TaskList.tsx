import TaskItem from "./TaskItem/TaskItem.tsx";
import {Task} from "../../models/Task.ts";
import {TaskListContainer} from "./TaskList.styles.ts";
import {useMemo} from "react";


interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (task: Task) => void;
}

const TaskList = ({tasks, onEdit, onDelete}: TaskListProps) => {

    if (tasks.length === 0) return null;

    const taskItems = useMemo(() =>
        tasks.map(task => (
            <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete}/>
        )), [tasks, onEdit, onDelete]
    );

    return (
        <TaskListContainer>
            {taskItems}
        </TaskListContainer>
    );
};

export default TaskList;
