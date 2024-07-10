import React, { useState } from 'react';
import ListContainer from '../Components/ListContainer';
import Typography from '@mui/material/Typography';
import Botones from '../Components/Botones';
import ModalTasks from '../Components/Modal';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export default function MainList() {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddTask = (taskData) => {
        const newRow = {
            task: taskData.task,
            status: taskData.status,
            actions: [
                <IconButton key="delete">
                    <DeleteForeverIcon />
                </IconButton>,
                <IconButton key="edit">
                    <EditIcon />
                </IconButton>,
            ],
        };
        setRows([...rows, newRow]);
    };

    return (
        <>
            <Typography 
                variant="h3" 
                color="initial" 
                align='center'
                sx={{ padding: 4 }}
            >
                To do
            </Typography>
            <ListContainer rows={rows} />
            <ModalTasks
                open={open}
                handleClose={handleClose}
                onAddTask={handleAddTask}
            />
            <Botones
                handleOpen={handleOpen}
            />
        </>
    );
}
