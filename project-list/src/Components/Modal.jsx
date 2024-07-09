import { Box,Modal, Typography } from "@mui/material";
import React from "react";
import EditTask from "./EditTask";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function ModalTasks({open, handleClose}) {
    //const [open, setOpen] = React.useState(false);
    
    return (
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box sx={style}>
            <EditTask/>
          </Box>
        </Modal>
      </div>
    );
  }