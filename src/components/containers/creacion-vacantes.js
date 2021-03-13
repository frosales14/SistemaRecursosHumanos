import React, { useState } from 'react';
import {
    Grid,
    Container,
    Typography,
    Button,
    Input,
    TextField,
} from '@material-ui/core';
import styled from 'styled-components';
import Layout from '../components/layout';
import { mobileScreen } from '../components/common/sizes';

const SubHeader = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.3rem;
`;

const MainHeader = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 1000;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
`;

const CustomButton = styled(Button)`
    font-family: Monserrat Medium;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.3rem;
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
    border-radius: 15px;
`;

const DescInput = styled.textarea`
    font-family: Monserrat Semi Bold;
    background-color: #02ddfb;
    height: 150px;
    width: 100%;
    font-size: 15px;
    border-radius: 15px;
`;

const CrearVacantes = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [totalVacantes, setTotalVacantes] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');

    const onNameChange = (e) => {
        e.preventDefault();
        setNombre(e.target.value.toLowerCase().trim());
    };

    const onDescriptionChange = (e) => {
        e.preventDefault();
        setDescripcion(e.target.value.toLowerCase().trim());
    };

    const onTotalVacantesChange = (e) => {
        e.preventDefault();
        setTotalVacantes(e.target.value.toLowerCase().trim());
    };

    const onDepartmentChange = (e) => {
        e.preventDefault();
        setDepartamento(e.target.value.toLowerCase().trim());
    };

    const onCityChange = (e) => {
        e.preventDefault();
        setCiudad(e.target.value.toLowerCase().trim());
    };

    const agregarVacante = () => {
        console.log('add vacante');
        console.log({
            nombre,
            descripcion,
            totalVacantes,
            departamento,
            ciudad,
        });
        fetch(
            `https://hr-server-js.herokuapp.com/vacantes/add?nombre=${nombre}&descripcion=${descripcion}&departamento=${departamento}&totalVacantes=${totalVacantes}&ciudad=${ciudad}`,
            {
                method: 'GET',
            }
        )
            .then((res) => (window.location.href = '/admin-interface'))
            .catch((err) => console.log(err));
    };

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
                                <MainHeader>FORMULARIO DE VACANTE</MainHeader>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <SubHeader>NOMBRE DE LA VACANTE</SubHeader>
                            <CustomInput
                                onChange={onNameChange}
                                disableUnderline={true}
                                fullWidth
                            ></CustomInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>DESCRIPCIÓN</SubHeader>
                            <DescInput
                                onChange={onDescriptionChange}
                                disableUnderline={true}
                                fullWidth
                            ></DescInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>PLAZAS DISPONIBLES</SubHeader>
                            <CustomInput
                                onChange={onTotalVacantesChange}
                                disableUnderline={true}
                                fullWidth
                            ></CustomInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>DEPARTAMENTO</SubHeader>
                            <CustomInput
                                onChange={onDepartmentChange}
                                disableUnderline={true}
                                fullWidth
                            ></CustomInput>
                        </Grid>
                        <Grid item>
                            <SubHeader>CIUDAD</SubHeader>
                            <CustomInput
                                onChange={onCityChange}
                                disableUnderline={true}
                                fullWidth
                            ></CustomInput>
                        </Grid>
                        <Grid item container justify="flex-end">
                            <CustomButton onClick={agregarVacante}>
                                Publicar
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default CrearVacantes;
