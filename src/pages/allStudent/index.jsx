import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types'
import { getAllStudent, getAllStudentPage, setAllStudentPage } from './actions';
import { createStructuredSelector } from 'reselect';
import { selectPage, selectPageStudent, selectStudent } from './selectors';
import { Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getStudentsPerPage } from '@domain/api';

import classes from './style.module.scss'
import { selectData } from '@pages/Login/selectors';

const allStudent = ({ students, page, pageStudent, data }) => {
  // console.log(Number(data[0]?.id))
  console.log(page)

  const dispatch = useDispatch();
  const [pagesAll, setPagesAll] = useState(page)

  useEffect(() => {
    dispatch(getAllStudent())
    // totalPage()
  }, []);

  useEffect(() => {
    dispatch(getAllStudentPage(Number(data[0]?.id)))
    totalPage()
  }, [dispatch])

  const totalPage = () => {
    console.log(Math.ceil(students.length / 10))
    setPagesAll(Math.ceil(students.length / 10))
  }

  const onPageChange = (event, value) => {
    dispatch(getAllStudentPage(value))
    // console.log(event, '<<<<<<EVENT')
    // console.log(value, '<<<<<<VALUE')
  }

  return (
    <div className={classes.allStudent}>
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
              pageStudent ?
                pageStudent?.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{data?.name}</TableCell>
                      <TableCell>{data?.class}</TableCell>
                      <TableCell>{data?.major}</TableCell>
                    </TableRow>
                  )
                })
                :
                null
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={pagesAll} onChange={onPageChange} />
    </div>
  );
};

allStudent.propTypes = {
  students: PropTypes.array,
  page: PropTypes.int,
  pageStudent: PropTypes.array,
  selectData: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  students: selectStudent,
  page: selectPage,
  pageStudent: selectPageStudent,
  data: selectData
})

export default connect(mapStateToProps)(allStudent);
