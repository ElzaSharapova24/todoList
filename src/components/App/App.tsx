import './App.css'
import GlobalStyles from "../../styles/globalStyles.ts";
import {Task} from "../../models/Task.ts";
import TaskPresenter from "../../presenters/TaskPresenter.ts";
import TaskList from "../TaskList/TaskList.tsx";
import AddTaskDrawer from "../AddTaskDrawer/AddTaskDrawer.tsx";
import EditTaskPopap from "../EditTaskPopap/EditTaskPopap.tsx";
import DeleteTaskPopap from "../DeleteTaskPopap/DeleteTaskPopap.tsx";
import {useMemo, useState} from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 8px;
    background-color: #096885;
    color: white;
    border: none;
    cursor: pointer;

`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isAddTaskDrawerOpen, setAddTaskDrawerOpen] = useState(false);
    const [editTask, setEditTask] = useState<Task | null>(null);
    const [deleteTask, setDeleteTask] = useState<Task | null>(null);

    const taskPresenter = useMemo(() => new TaskPresenter(setTasks), [setTasks]);

    return (
        <>
            <GlobalStyles/>
            <Container>
                <Button onClick={() => setAddTaskDrawerOpen(true)}>Add Task</Button>
                <TaskList tasks={tasks} onEdit={setEditTask} onDelete={setDeleteTask}/>
                <AddTaskDrawer isOpen={isAddTaskDrawerOpen} onAddTask={(text) => taskPresenter.addTask(text)}
                               onClose={() => setAddTaskDrawerOpen(false)}/>
                <EditTaskPopap
                    task={editTask}
                    onSave={(id, text) => taskPresenter.editTask(id, text)}
                    onClose={() => setEditTask(null)}
                />
                <DeleteTaskPopap
                    task={deleteTask}
                    onConfirm={(id) => taskPresenter.deleteTask(id)}
                    onClose={() => setDeleteTask(null)}
                />
            </Container>
        </>
    )
}

export default App
