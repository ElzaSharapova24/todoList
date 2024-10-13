import GlobalStyles from "../../styles/globalStyles.ts";
import {Task} from "../../models/Task.ts";
import TaskPresenter from "../../presenters/TaskPresenter.ts";
import TaskList from "../TaskList/TaskList.tsx";
import AddTaskDrawer from "../AddTaskDrawer/AddTaskDrawer.tsx";
import EditTaskPopup from "../EditTaskPopup/EditTaskPopup.tsx";
import DeleteTaskPopup from "../DeleteTaskPopup/DeleteTaskPopup.tsx";
import {useMemo, useState} from "react";
import {Button, Container, ContentWrapper, MainTitle} from "./App.styles.ts";


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
                <ContentWrapper>
                    <MainTitle>ToDo List</MainTitle>
                    {!isAddTaskDrawerOpen && (
                        <Button onClick={() => setAddTaskDrawerOpen(true)}>Add new task</Button>
                    )}
                    <TaskList tasks={tasks} onEdit={setEditTask} onDelete={setDeleteTask}/>
                    <AddTaskDrawer isOpen={isAddTaskDrawerOpen} onAddTask={(text) => taskPresenter.addTask(text)}
                                   onClose={() => setAddTaskDrawerOpen(false)}/>
                    <EditTaskPopup
                        task={editTask}
                        onSave={(id, text) => taskPresenter.editTask(id, text)}
                        onClose={() => setEditTask(null)}
                    />
                    <DeleteTaskPopup
                        task={deleteTask}
                        onConfirm={(id) => taskPresenter.deleteTask(id)}
                        onClose={() => setDeleteTask(null)}
                    />
                </ContentWrapper>
            </Container>
        </>
    )
}

export default App
