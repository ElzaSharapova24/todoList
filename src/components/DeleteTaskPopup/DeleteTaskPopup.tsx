import {Task} from "../../models/Task.ts";
import {Button, ButtonContainer, DeleteDescription, Dialog, DialogOverlay} from "./DeleteTaskPopup.styles.ts";
import {Heating} from "../../styles/CommonStyles.ts";
import {useCallback} from "react";


interface DeleteTaskDialogProps {
    task: Task | null;
    onConfirm: (id: number) => void;
    onClose: () => void;
}

const DeleteTaskPopup = ({task, onConfirm, onClose}: DeleteTaskDialogProps) => {
    const handleConfirm = useCallback(() => {
        if (task) {
            onConfirm(task.id);
        }
        onClose();
    }, [task, onConfirm, onClose]);

    if (!task) return null

    if (!task) return null;

    return (
        <DialogOverlay>
            <Dialog>
                <Heating>Подтвердите удаление</Heating>
                <DeleteDescription>Вы уверены что хотите удалить задачу "{task.text}"?</DeleteDescription>
                <ButtonContainer>
                    <Button onClick={onClose}>Отменить</Button>
                    <Button onClick={handleConfirm}>Удалить</Button>
                </ButtonContainer>
            </Dialog>
        </DialogOverlay>
    );
};

export default DeleteTaskPopup;
