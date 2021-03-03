import React from 'react';
import { Grid, Container, Typography, Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import Layout from '../components/layout';
import { mobileScreen } from '../components/common/sizes';

const SubHeader = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
`;

const MainHeader = styled(Typography)`
    font-family: Montserrat Bold;
    font-weight: 1000;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
`;

const CustomButton = styled(Button)`
    font-family: Monserrat Bold;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.5rem;
    background-color: #061c32;
    color: white;
    &:hover {
        background-color: #31425c;
    }
    @media only screen and (max-width: ${mobileScreen}) {
        width: 100%;
        font-size: 0.8rem;
    }
`;

const CustomInput = styled(Input)`
    font-family: Monserrat Semi Bold;
    background-color: #02ddfb;
    height: 40px;
    font-size: 15px;
`;

const DescInput = styled(Input)`
    font-family: Monserrat Semi Bold;
    background-color: #02ddfb;
    height: 150px;
    font-size: 15px;
`;

const CrearVacantes = () => {
    return (
        <Layout>
            <Container fixed maxWidth="xl">
                <Grid 
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid
                        item
                        container
                        spacing={4}
                        direction="column"
                        xs={12}
                        md={6}
                    >
                        <Grid item container spacing={0} justify="center">
                            <Grid item>
                                <Typography variant = {'h4'}>
                                FORMULARIO DE VACANTE
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <SubHeader>NOMBRE DE LA VACANTE</SubHeader>
                            <CustomInput fullWidth></CustomInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>DESCRIPCIÓN</SubHeader>
                            <DescInput fullWidth></DescInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>PLAZAS DISPONIBLES</SubHeader>
                            <CustomInput fullWidth></CustomInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>FECHA DE CONTRATACIÓN</SubHeader>
                            <CustomInput fullWidth></CustomInput>
                        </Grid>
                        <Grid item container justify="flex-end">
                            <CustomButton>Publicar</CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default CrearVacantes;
