import React from 'react';
import styled from 'styled-components';
import {
    Grid,
    makeStyles,
    Typography,
    Container,
    Hidden,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';
import imagen from '../imgs/welcome_screen_image.svg';

const NavLink = styled.a`
    text-decoration: none;
`;

const Header1 = styled(Typography)`
    font-family: Monserrat Light;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.8rem;
    color: #00bff6;
`;

const Header2 = styled(Typography)`
    font-family: Monserrat Thin;
    font-weight: 900;
    text-decoration: none;
    font-size: 1.6rem;
    color: #00bff6;
`;

const PrimaryButton = styled(Button)`
    font-family: Monserrat Regular;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    background-color: #061c32;
    color: white;
    border-radius: 15px;
    &:hover {
        background-color: #31425c;
    }
`;

const SecondaryButton = styled(Button)`
    font-family: Monserrat Regular;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    border-radius: 15px;
    &:hover {
        background-color: #31425c;
    }
`;

const useStyles = makeStyles((theme) => ({
    textoPrincipal: {
        fontSize: '2.2rem',
        color: '#00BFF6',
    },
    textoSecundario: {
        fontSize: '1.6rem',
    },
    boton: {
        margin: theme.spacing(2),
        borderRadius: '15px',
    },
    imagenPrincipal: {
        width: '80%',
        height: '80%',
    },
}));

const WelcomeScreen = () => {
    const {
        textoPrincipal,
        textoSecundario,
        boton,
        imagenPrincipal,
    } = useStyles();
    return (
        <Layout>
            <Container fixed max-width="xl">
                <Grid container sapcing={2} alignItems="center">
                    <Grid item container spacing={2} xs={12} md={6} lg={6}>
                        <Grid item>
                            <Header1>
                                ¿LISTO PARA ENCONTRAR EL TRABAJO DE TUS SUEÑOS?
                            </Header1>
                        </Grid>
                        <Grid item>
                            <Header2>EN Comex TE ESTAMOS ESPERANDO</Header2>
                        </Grid>
                        <Grid item container alignItems="center">
                            <Grid item>
                                <SecondaryButton
                                    className={boton}
                                    variant="outlined"
                                    color="secondary"
                                    disableElevation
                                    size="large"
                                >
                                    MAS INFO
                                </SecondaryButton>
                            </Grid>
                            <Grid item>
                                <NavLink href="/puestos">
                                    <PrimaryButton
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        size="large"
                                    >
                                        APLICAR
                                    </PrimaryButton>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} md={6} lg={6}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item>
                                    <img
                                        src={imagen}
                                        className={imagenPrincipal}
                                        alt="Imagen principal"
                                    ></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </Layout>
    );
};

export default WelcomeScreen;
