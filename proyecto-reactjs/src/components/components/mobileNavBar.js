import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Drawer, IconButton, Grid, Container } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import useScrollPosition from './hooks';
import styled from 'styled-components';
import { normalMonitor } from './common/sizes';
import comex from '../imgs/comex.png';

const MenuButton = styled(IconButton)``;

const MobileHeader = styled.header`
    padding: ${prop => (prop.scrollPosition > 10 ? '10px 0' : '20px 0')};
    transition: padding, 0.5s;
    img {
        transition: width, 0.5s;
        width: ${prop => (prop.scrollPosition > 10 ? '85%' : '100%')};
    }
    @media only screen and (min-width: ${normalMonitor}) {
        display: none;
    }
`;

const MobileNav = styled.nav`
    padding: '50px 10px';
    ul {
        list-style: none;
        list-style-position: inside;
        margin: 0;
        padding: 0;
        li {
            a {
                display: block;
                padding: 20px;
            }
            &:last-child {
                margin: 0;
            }
        }
    }
`;


const MobileNavBar = () => {
    const currentScrollPosition = useScrollPosition();
    const [mobileDrawer, setMobileDrawer] = useState(false);

    const toggleDrawer = open => event => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setMobileDrawer(open);
    };

    const buttons = [
        {name: 'Inicio', path: ''},
        {name: 'Puestos', path: ''},
        {name: 'Nosotros', path: ''},
        {name: '¿Como Aplicar?', path: ''},
    ]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="height=device-height,
                      width=device-width, initial-scale=1.0,
                      minimum-scale=1.0, maximum-scale=1.0,
                      user-scalable=no"
                />
            </Helmet>
            <MobileHeader scrollPosition={currentScrollPosition}>
                <Container fixed maxWidth="xl">
                    <Grid container alignItems="center">
                        <Grid item xs={6}>
                            {/* Logo */}                          
                                <img
                                    loading="lazy"
                                    alt="comex-logo"
                                    src={comex}
                                    height="auto"
                                />
                        </Grid>
                        <Grid container item justify="flex-end" xs={6}>
                            {/* Navigation Button */}
                            <Grid item>
                                <MenuButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon fontSize="large" />
                                </MenuButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Drawer open={mobileDrawer} onClose={toggleDrawer(false)}>
                     <div
                        role="presentation"
                        style={{ width: '50vw', marginTop: '20%' }}
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <MobileNav>
                            <ul>
                                {buttons.map(button => {
                                    return(
                                        <li key={button.name}>
                                            {button.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </MobileNav>
                    </div>
                </Drawer>
            </MobileHeader>
        </>
    )
}

export default MobileNavBar;