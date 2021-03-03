import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import imagen_mision from '../imgs/mision.svg';
import imagen_vision from '../imgs/vision.svg';

import {
    Grid,
    makeStyles,
    Typography,
    Container,
    Hidden,
} from '@material-ui/core';


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

const useStyles = makeStyles((theme) => ({
    imagenPrincipal: {
        width: '80%',
        height: '80%',
    },
    container: {
        marginBottom: theme.spacing(10),
    },
}));



const Nosotros = () => {
    const {
        imagenPrincipal,
        container
    } = useStyles();
    return (
        <Layout>
            <Container 
                fixed max-width="xl" 
                mb={2}
                className={container}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item container spacing={2} xs={12} md={6} lg={6}>
                        <Grid item>
                            <Header1>
                                Nuestra misión
                            </Header1>
                        </Grid>
                        <Grid item>
                           <Typography>
                               Enriquecemos la calidad de vida de las personas, embelleciendo, protegiendo y preservando el mundo con bienestar y optimismo, desarrollando soluciones innovadoras y de alta calidad para ser la mejor opción de nuestros clientes.
                           </Typography>
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
                                        src={imagen_mision}
                                        className={imagenPrincipal}
                                        alt="Imagen principal"
                                    ></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
            <Container 
                    fixed  
                    max-width="xl"
                    mb={2} 
                    className={container}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item container spacing={2} xs={12} md={6} lg={6}>
                        <Grid item>
                            <Header1>
                                Nuestra visión
                            </Header1>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Ser reconocidos como la empresa líder en recubrimientos con la mayor confianza y cercanía con nuestros clientes, mediante la entrega de soluciones especializadas, sostenibles, innovadoras y de alta calidad.
                            </Typography>
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
                                        src={imagen_vision}
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

export default Nosotros;