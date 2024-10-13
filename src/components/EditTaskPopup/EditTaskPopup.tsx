import {Task} from "../../models/Task.ts";
import React, {useCallback, useEffect, useState} from "react";
import {Button, ButtonContainer, Dialog, DialogOverlay, TextField} from "./EditTaskPopap.styles.ts";
import {Heating} from "../../styles/CommonStyles.ts";


interface EditTaskDialogProps {
    task: Task | null;
    onSave: (id: number, text: string) => void;
    onClose: () => void;
}

const EditTaskPopup = ({task, onSave, onClose}: EditTaskDialogProps) => {
    const [taskText, setTaskText] = useState(task ? task.text : '');

    useEffect(() => {
        if (task) {
            setTaskText(task.text);
        }
    }, [task]);


    const handleSave = useCallback(() => {
        if (task && taskText) {
            onSave(task.id, taskText);
        }
        onClose();
    }, [task, taskText, onSave, onClose]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && task && taskText) {
            handleSave();
        }
    }, [task, taskText, handleSave]);

    const handleClose = useCallback(() => {
        setTaskText('');
        onClose();
    }, [onClose]);

    if (!task) return null;

    return (
        <DialogOverlay>
            <Dialog>
                <Heating>Редактировать задачу</Heating>
                <TextField
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <ButtonContainer>
                    <Button onClick={handleClose}>Отменить</Button>
                    <Button onClick={handleSave}>Сохранить</Button>
                </ButtonContainer>
            </Dialog>
        </DialogOverlay>
    );
};

export default EditTaskPopup;
