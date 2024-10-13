import {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {AddButton, CloseButton, Drawer, ErrorMessage, TextField, TodoListHeader} from './AddTaskDrawer.styles';

interface AddTaskDrawerProps {
    isOpen: boolean;
    onAddTask: (text: string) => void;
    onClose: () => void;
}

type Error = '' | 'Поле не может быть пустым' | 'Задача не может содержать "!"';

const AddTaskDrawer = ({isOpen, onAddTask, onClose}: AddTaskDrawerProps) => {
    const [taskText, setTaskText] = useState<string>('');
    const [error, setError] = useState<Error>('');

    const validateText = (text: string): Error => {
        if (text.includes('!')) return 'Задача не может содержать "!"';
        if (!text.trim()) return 'Поле не может быть пустым';
        return '';
    };

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.trim();
        setError(validateText(text));
        setTaskText(text);
    }, []);

    const handleAdd = useCallback(() => {
        if (!error) {
            onAddTask(taskText);
            setTaskText('');
            onClose();
        }
    }, [error, taskText, onAddTask]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !error) {
            handleAdd();
        }
    }, [handleAdd, error]);

    const handleClose = useCallback(() => {
        setTaskText('');
        setError('');
        onClose();
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <Drawer>
            <TodoListHeader>Добавить задачу</TodoListHeader>
            <TextField
                type="text"
                value={taskText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                error={!!error}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <AddButton onClick={handleAdd} disabled={!!error}>
                Добавить
            </AddButton>
            <CloseButton onClick={handleClose}>Отменить</CloseButton>
        </Drawer>
    );
};


export default AddTaskDrawer;
