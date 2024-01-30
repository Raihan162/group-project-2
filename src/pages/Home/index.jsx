import Typewriter from 'typewriter-effect';
import { Box } from '@mui/material';
import NavHome from './components/Navbar';
import classes from './style.module.scss';
import banner from '../../assets/banner.png';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectData } from '@pages/Login/selectors';

const Home = ({dataLogin}) => (
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

const mapStateToProps = createStructuredSelector({
  dataLogin: selectData,
});

export default connect(mapStateToProps)(Home);