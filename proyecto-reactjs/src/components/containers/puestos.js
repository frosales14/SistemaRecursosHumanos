import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    Grid,
    Typography,
    Container,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const NavLink = styled.a`
    text-decoration: none;
`;

const Header1 = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 200;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.8rem;
`;

const Paragraph = styled(Typography)`
    font-family: Monserrat Light;
    font-weight: 200;
    text-transform: uppercase;
    font-size: 1.2rem;
`;

const useStyles = makeStyles((theme) => ({
    containerMain: {
        marginBottom: theme.spacing(10),
    },
    papers: {
        padding: theme.spacing(1),
        textAlign: 'center',
        height: '100%',
    },
    title: {
        fontSize: '2rem',
        marginBottom: theme.spacing(2),
    },
    nombrePuesto: {
        padding: theme.spacing(2),
    },
    infoVacantes: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        fontSize: '1.2rem',
        fontStyle: 'bold',
    },
    boton: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        border: 0,
    },
    textBoton: {
        color: '#FFFFFF',
    },
    formControl: {
        minWidth: 200,
    },
}));

const Puestos = () => {
    const {
        containerMain,
        papers,
        title,
        nombrePuesto,
        infoDepto,
        infoVacantes,
        boton,
        textBoton,
        formControl,
    } = useStyles();

    const valoresDrop = [
        {
            valor: 'IT',
        },
        {
            valor: 'Marketing',
        },
        {
            valor: 'Marketing',
        },
    ];

    const [vacantes, setVacantes] = useState([]);

    const getVacantes = async () => {
        
       await axios.get('https://hr-server-js.herokuapp.com/vacantes')
      .then((res)=>{setVacantes(
        res.data.vacantes
      )}
      )  
      .catch((err)=> {console.log(err)})
    };

    useEffect(() => {
        getVacantes()
    }, []);

    console.log({vacantes})

    return (
        <Layout>
            <Container>
                <Grid item container spacing={0} justify="center">
                    <Grid item>
                        <Typography variant={'h4'} className={title}>
                            PLAZAS DISPONIBLES
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item justify="center" spacing={4}>
                    <Grid item>
                        <FormControl className={formControl}>
                            <InputLabel>Departamentos</InputLabel>
                            <Select>
                                {valoresDrop.map((item) => {
                                    return (
                                        <MenuItem value={item.valor}>
                                            {item.valor}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container className={containerMain} spacing={3}>
                    <Grid
                        item
                        container
                        spacing={3}
                        md={12}
                        xs={12}
                        direction="row"
                    >
                        {vacantes.map((vacante, index) => {
                            return (
                                <Grid item key={index} md={3} xs={12} sm={6}>
                                    <Paper className={papers}>
                                        <Header1 className={nombrePuesto}>
                                            {vacante.nombre}
                                        </Header1>
                                        <Paragraph>
                                            {vacante.descripcion}
                                        </Paragraph>
                                        <Grid item>
                                            <Typography
                                                className={infoVacantes}
                                                variant={'h6'}
                                            >
                                                {vacante.totalVacantes}
                                            </Typography>
                                            <Typography
                                                className={infoVacantes}
                                                variant={'h6'}
                                            >
                                                {vacante.ciudad}
                                            </Typography>
                                            <Typography
                                                className={infoDepto}
                                                variant={'h6'}
                                            >
                                                {vacante.departamento}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <NavLink href="/registro">
                                                <Button
                                                    className={boton}
                                                    variant="contained"
                                                    color="primary"
                                                    disableElevation
                                                    size="large"
                                                    fullWidth="true"
                                                >
                                                    <Typography
                                                        className={textBoton}
                                                        variant={'h6'}
                                                    >
                                                        APLICAR
                                                    </Typography>
                                                </Button>
                                            </NavLink>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Puestos;
