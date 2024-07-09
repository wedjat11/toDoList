import React, { useState } from "react";
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import BotonesModal from "./BotonesModal";


export default function MainTask({closeModal}){
    const [task, setTask]= useState("")
    const [taskBody, setTaskBody] = useState("")

    function handleChange(e){
        setTask(e.target.value)

    }
    function handleBodyChange(e){
        setTaskBody(e.target.value)
    }

    function handleClick(){
        console.log(task,taskBody)
    }


    return (
        <>
            <Typography variant="h4" color="initial" align="center">Crear tarea</Typography>
            <TextField
            id="taskTitle"
            label="Title"
            value={task}
            onChange={handleChange}
            sx={{width:"100%", marginTop: 2}}
            />
            <TextField
            id="taskBody"
            label="Descripcion"
            value={taskBody}
            onChange={handleBodyChange}
            sx={{width:"100%", marginTop: 2}}
            />
            <BotonesModal
            handleClick={handleClick}
            handleClose={closeModal}/>
        </>
        
    )
}