import React, { useState, useEffect } from 'react'
import ListContainer from '../Components/ListContainer'
import Typography from '@mui/material/Typography'

export default function MainList(){
    return(
        <>
        <Typography 
        variant="h3" 
        color="initial" 
        align= 'center'
        sx={{padding: 4}}>To do</Typography>
        <ListContainer/>
        </>
        
    )
}
