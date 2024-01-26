import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';

import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { useNavigate, useParams } from 'react-router-dom';

import { selectStudentDetail } from './selectors';
import classes from './style.module.scss';
import { getStudentDetail, updateStudent } from './actions';

const Modify = ({ studentDetailData }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(updateStudent(id, data));
  };

  useEffect(() => {
    dispatch(
      getStudentDetail(id, () => {
        navigate('/');
      })
    );
  }, [dispatch, id, navigate]);

  return (
    <div>
      <Typography variant="h4" color="initial">
        <FormattedMessage id="modify_student" />
      </Typography>
      <Box>
        <form action="Modify-student" onSubmit={handleSubmit(onSubmit)} className={classes['form-container']}>
          <Box className={classes.form}>
            <label htmlFor="name">
              <FormattedMessage id="label_name" />
            </label>
            <FormattedMessage id="placeholder_name">
              {(placeholderText) => (
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={studentDetailData.name}
                  placeholder={placeholderText}
                  {...register('name', {
                    required: 'name is required',
                  })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
              )}
            </FormattedMessage>
            {errors.name && (
              <span className={classes.error} role="alert">
                {errors.name.message}
              </span>
            )}
          </Box>
          <Box className={classes.form}>
            <label htmlFor="class">
              <FormattedMessage id="label_class" />
            </label>
            <FormattedMessage id="placeholder_class">
              {(placeholderText) => (
                <select
                  id="class"
                  name="class"
                  defaultValue={studentDetailData.class}
                  placeholder={placeholderText}
                  {...register('class', {
                    required: 'class is required',
                  })}
                >
                  <option value="" disabled hidden>
                    {placeholderText}
                  </option>
                  <option value="IX">IX</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                </select>
              )}
            </FormattedMessage>{' '}
            {errors.class && (
              <span className={classes.error} role="alert">
                {errors.class.message}
              </span>
            )}
          </Box>
          <Box className={classes.form}>
            <label htmlFor="major">
              <FormattedMessage id="label_major" />
            </label>
            <FormattedMessage id="placeholder_major">
              {(placeholderText) => (
                <select
                  id="major"
                  name="major"
                  defaultValue={studentDetailData.major}
                  placeholder={placeholderText}
                  {...register('major', {
                    required: 'major is required',
                  })}
                >
                  <option value="" disabled hidden>
                    {placeholderText}
                  </option>
                  <option value="IPA">IPA</option>
                  <option value="IPS">IPS</option>
                </select>
              )}
            </FormattedMessage>{' '}
            {errors.major && (
              <span className={classes.error} role="alert">
                {errors.major.message}
              </span>
            )}
          </Box>
          <Box className={classes.form}>
            <label htmlFor="gender">
              <FormattedMessage id="label_gender" />
            </label>
            <Box className={classes['radio-wrapper']}>
              <Box className={classes.radio}>
                <label htmlFor="male">
                  <MaleIcon className={classes.logo} />
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  {...register('gender', {
                    required: 'gender is required',
                  })}
                  defaultChecked={studentDetailData?.gender === 'Male'}
                />
              </Box>

              <Box className={classes.radio}>
                <label htmlFor="female">
                  <FemaleIcon className={classes.logo} />
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  {...register('gender', {
                    required: 'gender is required',
                  })}
                  defaultChecked={studentDetailData?.gender === 'Female'}
                />
                {errors.gender && (
                  <span className={classes.error} role="alert">
                    {errors.gender.message}
                  </span>
                )}
              </Box>
            </Box>
          </Box>
          <Box className={classes.button}>
            <Button type="submit" variant="contained" size="small" onClick={() => onSubmit()}>
              submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

Modify.propTypes = {
  studentDetailData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  studentDetailData: selectStudentDetail,
});

export default connect(mapStateToProps)(Modify);
