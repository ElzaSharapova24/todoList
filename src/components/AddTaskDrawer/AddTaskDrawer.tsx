// AddTaskDrawer.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

const TextField = styled.input`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
`;

const AddButton = styled.button`
    padding: 8px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    &:disabled {
        background-color: grey;
    }
`;

interface AddTaskDrawerProps {
    isOpen: boolean;
    onAddTask: (text: string) => void;
    onClose: () => void;
}

const AddTaskDrawer: React.FC<AddTaskDrawerProps> = ({ isOpen, onAddTask, onClose }) => {
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
            <button onClick={onClose}>Close</button>
        </Drawer>
    );
};

export default AddTaskDrawer;
