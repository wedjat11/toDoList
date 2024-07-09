import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function createData(taskName, actions) {
  return { taskName, actions };
}

const rows = [
  createData('Jugar Futbol', [
    <IconButton key="delete">
      <DeleteForeverIcon />
    </IconButton>,
    <IconButton key="edit">
      <EditIcon />
    </IconButton>,
  ]),
];

export default function ListContainer() {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ width: "80vw", margin: "0 auto", display: "flex", justifyContent: "center" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tasks</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.taskName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.taskName}
              </TableCell>
              <TableCell align="right">
                {row.actions.map((action, index) => (
                  <React.Fragment key={index}>{action}</React.Fragment>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
