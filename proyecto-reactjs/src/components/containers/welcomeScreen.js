import React from 'react';
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
        contenido,
        imagenPrincipal,
    } = useStyles();
    return (
        <Layout>
            <Container fixed max-width="xl">
                <Grid container sapcing={2} alignItems="center">
                    <Grid item container spacing={2} xs={12} md={6} lg={6}>
                        <Grid item>
                            <Typography variant="h3" className={textoPrincipal}>
                                ¿LISTO PARA ENCONTRAR EL TRABAJO DE TUS SUEÑOS?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={textoSecundario}>
                                EN COMEX TE ESTAMOS ESPERANDO
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                <Button
                                    className={boton}
                                    variant="outlined"
                                    color="secondary"
                                    disableElevation
                                    size="large"
                                >
                                    MAS INFO
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={boton}
                                    variant="contained"
                                    color="secondary"
                                    href="#"
                                    disableElevation
                                    size="large"
                                >
                                    APLICAR
                                </Button>
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
