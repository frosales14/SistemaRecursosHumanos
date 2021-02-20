import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Hidden,
    Container,
} from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MobileAppBar from './mobileNavBar';
import comex from '../imgs/comex.png';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
    botonesNav: {
        flexGrow: 1,
        margin: theme.spacing(1),
        border: 0,
    },
    img: {
        maxWidth: '150px',
        height: 'auto',
    },
    loginIcon: {
        color: '#02ddfb',
        height: 'auto',
        width: '40px',
        cursor: 'pointer',
        '&:hover': {
            color: '#00abc8',
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    const menu = [
        { name: 'Inicio', path: '' },
        { name: 'Puestos', path: '' },
        { name: 'Nostros', path: '' },
        { name: 'Como Aplicar', path: '' },
    ];

    const onCLickHandler = () => {
        console.log('login clicked');
    };

    return (
        <div>
            <Container fixed maxWidth="xl">
                <Hidden mdDown>
                    <AppBar color="#FFFFF" elevation={1}>
                        <Toolbar>
                            <Grid container alignItems="center" direction="row">
                                <Grid item md={3} lg={3}>
                                    <Typography
                                        variant="h6"
                                        className={classes.title}
                                    >
                                        <img
                                            className={classes.img}
                                            src={comex}
                                            alt="logo-comex"
                                        ></img>
                                    </Typography>
                                </Grid>
                                <Grid item container md={8} lg={8}>
                                    {menu.map((item, index) => {
                                        return (
                                            <Grid
                                                item
                                                key={index}
                                                md={3}
                                                lg={3}
                                            >
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    className={
                                                        classes.botonesNav
                                                    }
                                                >
                                                    {item.name}
                                                </Button>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                <Grid item md={1} lg={1}>
                                    <AccountCircle
                                        className={classes.loginIcon}
                                        onClick={onCLickHandler}
                                    />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </Container>
            <MobileAppBar />
            <div className={classes.offset}></div>
        </div>
    );
};

export default Navbar;
