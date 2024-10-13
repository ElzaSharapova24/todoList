import React, {useState} from 'react';
import {AddButton, Drawer, TextField} from "./AddTaskDrawer.styles.ts";


interface AddTaskDrawerProps {
    isOpen: boolean;
    onAddTask: (text: string) => void;
    onClose: () => void;
}

const AddTaskDrawer = ({isOpen, onAddTask, onClose}: AddTaskDrawerProps) => {
    const [taskText, setTaskText] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        if (text.includes('!')) {
            setError('Task text cannot contain "!"');
        } else {
            setError('');
        }
        setTaskText(text);
    };

    const handleAdd = () => {
        if (taskText && !error) {
            onAddTask(taskText); // Passing new task text
            setTaskText('');
        }
    };

    const handleClose = () => {
        setTaskText('');
        setError('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Drawer>
            <h2>Add Task</h2>
            <TextField
                type="text"
                value={taskText}
                onChange={handleChange}
            />
            {error && <div>{error}</div>}
            <AddButton onClick={handleAdd} disabled={!taskText || !!error}>
                Add Task
            </AddButton>
            <button onClick={handleClose}>Close</button>
        </Drawer>
    );
};

export default AddTaskDrawer;
