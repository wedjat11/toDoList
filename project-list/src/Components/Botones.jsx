import React from "react";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";

export default function Botones( {handleOpen}) {

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
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Añadir tarea
                </Button>
            </Box>
        </>
    )
}
