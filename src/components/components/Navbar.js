import React, { useState } from 'react';
import styled from 'styled-components';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Hidden,
    Container,
    Popper,
    Paper,
    Divider,
} from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MobileAppBar from './mobileNavBar';
import comex from '../imgs/comex.png';

const NavLink = styled.a`
    text-decoration: none;
`;

const NavItems = styled(Typography)`
    font-family: Monserrat Regular;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
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
        cursor: 'pointer',
        width: '40px',
        '&:hover': {
            color: '#00abc8',
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const toggleSignOut = () => {
        localStorage.setItem('userSession', null);
        window.location.href = '/';
    };

    const menu = [
        { name: 'Inicio', path: '/' },
        { name: 'Puestos', path: '/puestos' },
        { name: 'Nosotros', path: '/nosotros' },
    ];

    const userSession = JSON.parse(localStorage.getItem('userSession'));

    const open = Boolean(anchorEl);

    return (
        <div>
            <Container fixed maxWidth="xl">
                <Hidden mdDown>
                    <AppBar color="#FFFFF" elevation={1}>
                        <Toolbar>
                            <Grid container alignItems="center" direction="row">
                                <Grid item md={3} lg={3}>
                                    <Typography className={classes.title}>
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
                                                <NavLink href={item.path}>
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        className={
                                                            classes.botonesNav
                                                        }
                                                    >
                                                        <NavItems>
                                                            {item.name}
                                                        </NavItems>
                                                    </Button>
                                                </NavLink>
                                            </Grid>
                                        );
                                    })}
                                    <Grid item>
                                        {userSession !== null ? (
                                            <NavLink href="/admin-interface">
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    className={
                                                        classes.botonesNav
                                                    }
                                                >
                                                    <NavItems>
                                                        Dashboard
                                                    </NavItems>
                                                </Button>
                                            </NavLink>
                                        ) : null}
                                    </Grid>
                                </Grid>
                                <Grid item md={1} lg={1}>
                                    {userSession === null ? (
                                        <NavLink href="/login">
                                            <AccountCircle
                                                className={classes.loginIcon}
                                            />
                                        </NavLink>
                                    ) : (
                                        <>
                                            <AccountCircle
                                                className={classes.loginIcon}
                                                onClick={handleClick}
                                            />
                                            <Popper
                                                open={open}
                                                anchorEl={anchorEl}
                                                style={{ marginTop: '20px' }}
                                            >
                                                <Paper
                                                    elevation={3}
                                                    style={{ padding: '10px' }}
                                                >
                                                    <NavItems color="primary">
                                                        {userSession.user}
                                                    </NavItems>
                                                    <Divider variant="middle" />
                                                    <NavItems
                                                        color="primary"
                                                        onClick={toggleSignOut}
                                                    >
                                                        Cerrar sesion
                                                    </NavItems>
                                                </Paper>
                                            </Popper>
                                        </>
                                    )}
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </Container>
            <MobileAppBar />
        </div>
    );
};

export default Navbar;
