import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import comex from './imgs/comex.png';

const useStyles = makeStyles(theme =>({
    offset: theme.mixins.toolbar,
    title:{
        flexGrow: 1,
    },
    botonesNav:{
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    img: {
        maxWidth: '150px',
        height: 'auto',
      }
}))

const Navbar = () => {
    const classes =useStyles()
    return (
        <div>
            <AppBar color='#FFFFF' elevation={1}>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                         <img className={classes.img} src={comex} alt="logo-comex"></img>
                    </Typography>
                    <Button variant='outlined' color='primary' className={classes.botonesNav}>INICIO</Button>
                    <Button variant='outlined' color='primary' className={classes.botonesNav}>PUESTOS</Button>
                    <Button variant='outlined' color='primary' className={classes.botonesNav}>NOSOTROS</Button>
                    <Button variant='outlined' color='primary' className={classes.botonesNav}>¿CÓMO APLICAR?</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;