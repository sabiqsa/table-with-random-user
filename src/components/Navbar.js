import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import AdbIcon from '@material-ui/icons/Adb';

const Navbar = () => {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <AdbIcon style={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className={classes.navbarContainer}
          >
            Simple Song by Sabi
          </Typography>
        </Toolbar>
      </AppBar>
    </Router>
  );
};

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    flexGrow: 1,
  },
}));

export default Navbar;
