import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DeleteIcon from '@mui/icons-material/Delete';

import { getMyStudents, setDeleteMyStudent } from './actions';
import { selectMyStudent } from './selectors';

import classes from './style.module.scss';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { selectData } from '@pages/Login/selectors';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyStudent = ({ myStudents, data }) => {
  // console.log(data)
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const [idStudent, setIdStudent] = useState('');

  const handleModal = (id) => {
    setToggle(!toggle);
    setIdStudent(id);
  };

  // console.log(myStudents);

  const handleDelete = () => {
    dispatch(
      setDeleteMyStudent(idStudent, () => {
        dispatch(getMyStudents(data[0]?.id));
      })
    );
    setToggle(!toggle)
  };

  useEffect(() => {
    dispatch(getMyStudents(data[0]?.id));
  }, []);

  return (
    <>
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
              <TableCell>
                <FormattedMessage id="table_action" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myStudents ? (
              myStudents?.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data?.name}</TableCell>
                    <TableCell>{data?.class}</TableCell>
                    <TableCell>{data?.major}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleModal(data?.id)}>
                        <DeleteIcon style={{ color: '#B80000' }} />
                      </Button>
                      <Link to={`/student/${data?.id}`}>
                        <Button variant='contained'> Edit</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell>
                  <FormattedMessage id="table_none_student" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={toggle}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <FormattedMessage id="modal_delete_title" />
          </Typography>
          <Button onClick={handleDelete} variant="contained" style={{ width: '50%', backgroundColor: '#B80000' }}>
            Yes
          </Button>
          <Button onClick={() => setToggle(!toggle)} style={{ width: '50%', color: '#B80000' }}>
            No
          </Button>
          <Stack></Stack>
        </Box>
      </Modal>
    </>
  );
};

MyStudent.propTypes = {
  myStudents: PropTypes.array,
  data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  myStudents: selectMyStudent,
  data: selectData,
});

export default connect(mapStateToProps)(MyStudent);
