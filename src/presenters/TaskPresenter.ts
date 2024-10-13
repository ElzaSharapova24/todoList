import {Task} from '../models/Task';

class TaskPresenter {
    private tasks: Task[] = [];
    private setTasks: (tasks: Task[]) => void;

    constructor(setTasks: (tasks: Task[]) => void) {
        this.setTasks = setTasks;
    }

    addTask(text: string) {
        const newTask: Task = {id: Date.now(), text};
        this.tasks = [...this.tasks, newTask]; // Using spread operator to add new task
        this.setTasks(this.tasks);
    }

    editTask(id: number, text: string) {
        this.tasks = this.tasks.map(task => task.id === id ? {...task, text} : task);
        this.setTasks(this.tasks);
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.setTasks(this.tasks);
    }
}

export default TaskPresenter;
