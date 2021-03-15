import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Grid,
    makeStyles,
    Typography,
    Container,
    Hidden,
    TextField,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from '../components/layout';
import imagen from '../imgs/welcome_screen_image.svg';
import Paper from '@material-ui/core/Paper';

const NavLink = styled.a`
    text-decoration: none;
`;

const Title = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-align: center;
`;

const FormHeader = styled(Typography)`
    font-family: Monserrat Regular;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 1px;
    text-align: center;
`;

const FormInputs = styled(Typography)`
    font-family: Monserrat Light;
    font-weight: 200;
    text-transform: uppercase;
    font-size: 1rem;
    text-align: left;
`;

const ButtonFont = styled(Typography)`
    font-family: Monserrat Regular;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2px;
`;

const useStyles = makeStyles((theme) => ({
    containerMain: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(10),
    },
    imagenPrincipal: {
        width: '80%',
        height: '80%',
    },
    papers: {
        padding: theme.spacing(2),
        backgroundColor: 'rgba(2,221,251,0.6)',
        borderBottomLeftRadius: '35px',
    },
    title: {
        marginTop: theme.spacing(-2.5),
        marginBottom: theme.spacing(2),
    },
    titleForm: {
        color: '#FFFFFF',
    },
    form: {
        width: '100%',
        padding: theme.spacing(2),
    },
    titleTextfield: {
        color: '#FFFFFF',
    },
    textField: {
        padding: theme.spacing(0, 0, 1, 0),
    },
    boton: {
        padding: theme.spacing(1),
        border: 0,
    },
    textBoton: {
        color: '#FFFFFF',
    },
}));

const Registro = () => {
    const {
        containerMain,
        imagenPrincipal,
        papers,
        title,
        titleForm,
        form,
        titleTextfield,
        textField,
        boton,
        textBoton,
    } = useStyles();

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleAplicante = (event) => {
        const value = event.target.value;
        setNombre(value);
        console.log({ value });
    };

    const handleTelefono = (event) => {
        const value = event.target.value;
        setTelefono(value);
        console.log({ value });
    };

    const addAplicante = () => {
        fetch(
            `https://hr-server-js.herokuapp.com/aplicantes/add?nombre=${nombre}&telefono=${telefono}`,
            {
                method: 'GET',
            }
        ).catch((err) => console.error(err));

        localStorage.setItem('nombre_aplicante', nombre);
    };

    const vacante = JSON.parse(localStorage.getItem('puesto_seleccionado'));
    console.log({ vacante });

    return (
        <Layout>
            <Container fixed max-width="xl">
                <Grid
                    item
                    container
                    spacing={0}
                    xs={12}
                    md={12}
                    lg={12}
                    justify="center"
                >
                    <Grid item>
                        <Title className={title}>FORMULARIO DE APLICANTE</Title>
                    </Grid>
                </Grid>
                <Grid container className={containerMain}>
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
                    <Grid item container justify="center" xs={12} md={6} lg={6}>
                        <Grid item>
                            <Paper className={papers} square>
                                <FormHeader className={titleForm}>
                                    LLENA LOS DATOS QUE SE SOLICITAN
                                </FormHeader>
                                <form className={form}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12}>
                                            <FormInputs
                                                className={titleTextfield}
                                            >
                                                Puesto a aplicar:
                                            </FormInputs>
                                            <TextField
                                                className={textField}
                                                defaultValue={vacante.nombre}
                                                variant="outlined"
                                                fullWidth
                                                color="secondary"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} sm={12}>
                                            <FormInputs
                                                className={titleTextfield}
                                            >
                                                Nombre:
                                            </FormInputs>
                                            <TextField
                                                className={textField}
                                                label="INGRESE SU NOMBRE"
                                                variant="outlined"
                                                fullWidth
                                                color="secondary"
                                                onChange={handleAplicante}
                                                autoFocus
                                                required
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} sm={12}>
                                            <FormInputs
                                                className={titleTextfield}
                                            >
                                                Teléfono:
                                            </FormInputs>
                                            <TextField
                                                className={textField}
                                                variant="outlined"
                                                fullWidth
                                                color="secondary"
                                                required
                                                onChange={handleTelefono}
                                                type=""
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            +504
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </form>

                                <Grid item container justify="flex-end">
                                    <NavLink href="/cuestionario">
                                        <Button
                                            className={boton}
                                            variant="contained"
                                            color="secondary"
                                            disableElevation
                                            size="large"
                                            onClick={addAplicante}
                                            endIcon={<ArrowForwardIosIcon />}
                                        >
                                            <ButtonFont
                                                className={textBoton}
                                                variant={'h6'}
                                            >
                                                SIGUIENTE
                                            </ButtonFont>
                                        </Button>
                                    </NavLink>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Registro;
