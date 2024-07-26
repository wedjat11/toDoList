import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ListContainer({ rows }) {
    return (
        <TableContainer 
            component={Paper} 
            
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tasks</TableCell>
                        <TableCell>Info</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.task}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.desc}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.status}
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
