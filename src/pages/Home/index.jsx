import Typewriter from 'typewriter-effect';
import { Box } from '@mui/material';
import NavHome from './components/Navbar';
import classes from './style.module.scss';
import banner from '../../assets/banner.png';

const Home = () => (
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

export default Home;
