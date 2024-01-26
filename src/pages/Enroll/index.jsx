import { useDispatch } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { useNavigate } from 'react-router-dom';

import { createStudent } from './actions';
import classes from './style.module.scss';

const Enroll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      createStudent(
        {
          id: uuidv4,
          teacher_id: '1',
          name: data.name,
          class: data.class,
          major: data.major,
          gender: data.major,
        },
        () => {
          reset();
          navigate('/');
        }
      )
    );
  };

  return (
    <div>
      <Typography variant="h4" color="initial">
        <FormattedMessage id="enroll_student" />
      </Typography>
      <Box>
        <form action="enroll-student" onSubmit={handleSubmit(onSubmit)} className={classes['form-container']}>
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
                  defaultValue=""
                  placeholder={placeholderText}
                  {...register('class', {
                    required: 'class is required',
                  })}
                >
                  <option value="" disabled hidden>
                    {placeholderText}
                  </option>
                  <option value="Intership">Intership</option>
                  <option value="Trainee">Trainee</option>
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
                  defaultValue=""
                  placeholder={placeholderText}
                  {...register('major', {
                    required: 'major is required',
                  })}
                >
                  <option value="" disabled hidden>
                    {placeholderText}
                  </option>
                  <option value="Android Kotlin">Android Kotlin</option>
                  <option value="IOS Swift">IOS Swift</option>
                  <option value="Fullstack Javascript">Fullstack Javascript</option>
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
            <Button type="submit" variant="contained" size="small">
              submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Enroll;
