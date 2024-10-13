import {Task} from "../../models/Task.ts";
import {Button, ButtonContainer, Dialog, DialogOverlay} from "./DeleteTaskPopup.styles.ts";


interface DeleteTaskDialogProps {
    task: Task | null;
    onConfirm: (id: number) => void;
    onClose: () => void;
}

const DeleteTaskPopup = ({task, onConfirm, onClose}: DeleteTaskDialogProps) => {
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

export default DeleteTaskPopup;
