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

export default function AllStudent({ dataStudents }) {
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
                            <FormattedMessage id="table_major" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataStudents?.map((data, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data?.name}</TableCell>
                                    <TableCell>{data?.class}</TableCell>
                                    <TableCell>{data?.major}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
