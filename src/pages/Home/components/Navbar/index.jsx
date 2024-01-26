import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';

const NavHome = () => (
  <div className={classes.container}>
    <Link to="/login">
      <Button variant="outlined">
        <FormattedMessage id="login" />
      </Button>
    </Link>
    <Link to="/register">
      <Button variant="contained">
        <FormattedMessage id="register" />
      </Button>
    </Link>
  </div>
);

export default NavHome;
