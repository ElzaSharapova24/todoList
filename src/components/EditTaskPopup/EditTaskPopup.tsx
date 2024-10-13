import {Task} from "../../models/Task.ts";
import {useEffect, useState} from "react";
import {Button, ButtonContainer, Dialog, DialogOverlay, TextField} from "./EditTaskPopap.styles.ts";


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

    const handleSave = () => {
        if (task && taskText) {
            onSave(task.id, taskText);
        }
        onClose();
    };

    const handleClose = () => {
        setTaskText('');
        onClose();
    };
    if (!task) return null;

    return (
        <DialogOverlay>
            <Dialog>
                <h2>Edit Task</h2>
                <TextField
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <ButtonContainer>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </ButtonContainer>
            </Dialog>
        </DialogOverlay>
    );
};

export default EditTaskPopup;
