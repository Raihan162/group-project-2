import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { selectData, selectLogin } from '@pages/Login/selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavHome from './components/Navbar';
import classes from './style.module.scss';
import banner from '../../assets/banner.png';

const Home = ({ data, login }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate('/my-student');
    }
  }, [login, navigate]);
  return (
    <div>
      <NavHome />
      <Box className={classes.container}>
        <img src={banner} alt="" />
        <h1>
          <Typewriter
            options={{
              strings: ['Welcome To Phincon Academy', 'We Produce the Best Digital Talent'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </Box>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  login: selectLogin,
});

export default connect(mapStateToProps)(Home);
