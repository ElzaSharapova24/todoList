import React, {useState} from 'react';
import {AddButton, CloseButton, Drawer, TextField, TodoListHeader} from "./AddTaskDrawer.styles.ts";


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
            onAddTask(taskText);
            setTaskText('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && taskText && !error) {
            handleAdd();
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
            <TodoListHeader>Add Task</TodoListHeader>
            <TextField
                type="text"
                value={taskText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {error && <div>{error}</div>}
            <AddButton onClick={handleAdd} disabled={!taskText || !!error}>
                Add Task
            </AddButton>
            <CloseButton onClick={handleClose}>Close</CloseButton>
        </Drawer>
    );
};

export default AddTaskDrawer;
