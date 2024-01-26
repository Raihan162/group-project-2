import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import classes from './style.module.scss'
import { getMyStudent } from '@domain/api';
import { getMyStudents } from './actions';
import { selectMyStudent } from './selectors';

const MyStudent = ({ myStudents }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyStudents())
  }, [dispatch]);

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
            myStudents ?
              myStudents.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      {data?.name}
                    </TableCell>
                    <TableCell>
                      {data?.class}
                    </TableCell>
                    <TableCell>
                      {data?.major}
                    </TableCell>
                  </TableRow>
                )
              })
              :
              <TableRow>
                <TableCell>
                  <FormattedMessage id="table_none_student" />
                </TableCell>
              </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MyStudent.propTypes = {
  myStudents: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  myStudents: selectMyStudent
})

export default connect(mapStateToProps)(MyStudent);
