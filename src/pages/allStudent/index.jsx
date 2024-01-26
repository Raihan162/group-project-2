import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types'
import AllStudent from '@components/AllStudent';
import { getAllStudent } from './actions';
import { createStructuredSelector } from 'reselect';
import { selectStudent } from './selectors';
import { Pagination } from '@mui/material';

const allStudent = ({ students }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudent())
  }, [dispatch]);

  return (
    <div className=''>
      <AllStudent dataStudents={students} />
    </div>
  );
};

allStudent.propTypes = {
  students: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  students: selectStudent
})

export default connect(mapStateToProps)(allStudent);
