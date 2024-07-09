import React from "react";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";

export default function BotonesModal({handleClick, handleClose}){

    return(
        <Box sx={{justifyContent:'center', width: "100%", paddingTop:2, display:'flex', margin: "0 auto"}}>
            <Button variant="contained" color="success"sx={{marginRight: 2}} onClick={handleClick}>
            Crear
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
            Cancelar
            </Button>
        </Box>

    )
}