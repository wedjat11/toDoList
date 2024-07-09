import React, {useState} from 'react'
import ListContainer from '../Components/ListContainer'
import Typography from '@mui/material/Typography'
import Botones from '../Components/Botones'
import ModalTasks from '../Components/Modal'

export default function MainList(){
    const [open, setOpen]= useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Typography 
            variant="h3" 
            color="initial" 
            align= 'center'
            sx={{padding: 4}}>To do</Typography>
            <ListContainer/>
            <ModalTasks
            open={open}
            handleClose={handleClose}
            />
            <Botones
            handleOpen={handleOpen}
            />
        </>
        
    )
}
