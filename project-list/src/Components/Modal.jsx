import React from 'react';
import Modal from '@mui/material/Modal';
import MainTask from './MainTask';
import { Box } from '@mui/material';

export default function ModalTasks({ open, handleClose, onAddTask }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ backgroundColor: "white", p: 4, width: '50%' }}>
                <MainTask closeModal={handleClose} onAddTask={onAddTask} />
            </Box>
        </Modal>
    );
}
