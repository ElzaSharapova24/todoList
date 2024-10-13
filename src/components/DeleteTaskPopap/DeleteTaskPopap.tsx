import styled from 'styled-components';
import {Task} from "../../models/Task.ts";

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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
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
        background-color: #d9534f;
        color: white;
    }
`;

interface DeleteTaskDialogProps {
    task: Task | null;
    onConfirm: (id: number) => void;
    onClose: () => void;
}

const DeleteTaskPopap = ({task, onConfirm, onClose}: DeleteTaskDialogProps) => {
    const handleConfirm = () => {
        if (task) {
            onConfirm(task.id);
        }
        onClose();
    };

    if (!task) return null;

    return (
        <DialogOverlay>
            <Dialog>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete the task "{task.text}"?</p>
                <ButtonContainer>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleConfirm}>Delete</Button>
                </ButtonContainer>
            </Dialog>
        </DialogOverlay>
    );
};

export default DeleteTaskPopap;
