import React from 'react';
import Modal from '@mui/material/Modal';
import MainTask from './MainTask';

export default function ModalTasks({ open, handleClose, onAddTask }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div>
                <MainTask closeModal={handleClose} onAddTask={onAddTask} />
            </div>
        </Modal>
    );
}
