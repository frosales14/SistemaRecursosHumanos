import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import comex from './imgs/comex.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
  },
  img: {
    maxWidth: '150px',
    height: 'auto',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} variant="outlined">
              <img className={classes.img} src={comex} alt="logo-comex"></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
