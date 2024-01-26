import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { setLocale, setTheme } from '@containers/App/actions';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Menu, MenuItem } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupsIcon from '@mui/icons-material/Groups';
import { FormattedMessage } from 'react-intl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Navbar = ({ locale, theme, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const handleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const toAllStudent = () => {
    navigate('/all-student')
  }

  const toMyStudent = () => {
    navigate('/my-student')
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => toAllStudent()}>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="All Student" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => toMyStudent()}>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="My Student" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>

            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.headerWrapper}>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
            <div className={classes.contentWrapper}>
              <div className={classes.toolbar}>
                <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
                  {theme === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
                </div>
                <div className={classes.toggle} onClick={handleClick}>
                  <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
                  <div className={classes.lang}>{locale}</div>
                  <ExpandMoreIcon />
                </div>
              </div>
              <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
                <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
                  <div className={classes.menu}>
                    <Avatar className={classes.menuAvatar} src="/id.png" />
                    <div className={classes.menuLang}>
                      <FormattedMessage id="app_lang_id" />
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
                  <div className={classes.menu}>
                    <Avatar className={classes.menuAvatar} src="/en.png" />
                    <div className={classes.menuLang}>
                      <FormattedMessage id="app_lang_en" />
                    </div>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Navbar;
