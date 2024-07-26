import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function  FiltersTable(){
    const[filtro, setFiltro]= useState("")

    function handleChangeFiltro(e){
        setFiltro(e.target.value)
    }
    return(
        <>
        <Box sx={{display: 'flex', alignItems: 'right', justifyContent: 'right'}}>
            <Box sx={{ marginRight: 5, marginTop: 1}}>
                <Typography variant="h5"> Filtrar por Status</Typography>
            </Box>
            <TextField
             id="test"
             label=""
             select
             value={filtro}
             onChange={handleChangeFiltro}
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
        </Box>
        </>
    )
}