import React from "react";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";

export default function Botones() {
    return (
        <>
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginTop: 3,
                    //height: '100vh'  // Esto es opcional, solo si quieres centrar verticalmente también
                }}
            >
                <Button variant="contained" color="primary">
                    Añadir tarea
                </Button>
            </Box>
        </>
    )
}
