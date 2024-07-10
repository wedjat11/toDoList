import React from "react";
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import BotonesModal from "./BotonesModal";
import { Box, MenuItem } from "@mui/material";

export default function MainTask({ closeModal, onAddTask }) {
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            task: "",
            taskBody: "",
            status: ""
        }
    });

    const onSubmit = data => {
        console.log(data);
        onAddTask(data);
        reset(); // Resetea el formulario después de enviar
        closeModal(); // Cierra el modal después de enviar
    };

    return (
        <>
            <Typography variant="h4" color="initial" align="center">Crear tarea</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="task"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            id="taskTitle"
                            label="Title"
                            {...field}
                            sx={{ width: "100%", marginTop: 2 }}
                        />
                    )}
                />
                <Controller
                    name="taskBody"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            id="taskBody"
                            label="Descripcion"
                            {...field}
                            sx={{ width: "100%", marginTop: 2 }}
                        />
                    )}
                />
                <Box sx={{ width: '100%', marginTop: 2 }}>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Status"
                                sx={{ width: '100%' }}
                            >
                                <MenuItem key={1} value="completada">
                                    Completada
                                </MenuItem>
                                <MenuItem key={2} value="proceso">
                                    En proceso
                                </MenuItem>
                                <MenuItem key={3} value="pendiente">
                                    Pendiente
                                </MenuItem>
                            </TextField>
                        )}
                    />
                </Box>

                <BotonesModal
                    handleClick={handleSubmit(onSubmit)}
                    handleClose={closeModal}
                />
            </form>
        </>
    )
}
