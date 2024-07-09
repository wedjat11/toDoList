import { Box,Modal } from "@mui/material";
import React from "react";
import MainTask from "./EditTask";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };
export default function ModalTasks({open, handleClose}) {
    
    return (
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box sx={style}>
            <MainTask
            closeModal={handleClose}/>
          </Box>
        </Modal>
      </div>
    );
  }