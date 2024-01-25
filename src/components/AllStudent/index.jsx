import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './style.module.scss'
import { FormattedMessage } from 'react-intl';

export default function AllStudent() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <FormattedMessage id="table_no" />
                        </TableCell>
                        <TableCell>
                            <FormattedMessage id="table_student_name" />
                        </TableCell>
                        <TableCell>
                            <FormattedMessage id="table_class" />
                        </TableCell>
                        <TableCell>
                            <FormattedMessage id="table_teacher" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Siti</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>Dewi</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Siti</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>Dewi</TableCell>
                    </TableRow>
                    {/* {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
