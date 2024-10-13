import styled from 'styled-components';
import {Task} from "../../models/Task.ts";
import {useState} from "react";

const DialogOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Dialog = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    display: flex;
    flex-direction: column;
`;

const TextField = styled.input`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:nth-child(1) {
        background-color: #f0f0f0;
    }

    &:nth-child(2) {
        background-color: #007bff;
        color: white;
    }
`;

interface EditTaskDialogProps {
    task: Task | null;
    onSave: (id: number, text: string) => void;
    onClose: () => void;
}

const EditTaskPopap = ({task, onSave, onClose}: EditTaskDialogProps) => {
    const [taskText, setTaskText] = useState(task ? task.text : '');

    const handleSave = () => {
        if (task && taskText) {
            onSave(task.id, taskText);
        }
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
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </ButtonContainer>
            </Dialog>
        </DialogOverlay>
    );
};

export default EditTaskPopap;
