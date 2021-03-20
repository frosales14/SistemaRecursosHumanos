import React from 'react';
import {
    Grid,
    Container,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';
import styled from 'styled-components';
import Layout from '../components/layout';
import { mobileScreen } from '../components/common/sizes';

const NavLink = styled.a`
    text-decoration: none;
`;

const AdminButton = styled(Button)`
    font-family: Monserrat Bold;
    background-color: #061c32;
    height: 363px;
    width: 100%;
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: white;
    &:hover {
        background-color: #31425c;
    }
    @media only screen and (max-width: ${mobileScreen}) {
        width: 100%;
        font-size: 0.8rem;
    }
`;

const AdminInterface = () => {
    return (
        <Layout>
            <Container fixed madWidth="xl">
                <Grid container direction="row" alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={4} md={6}>
                        <NavLink href="/creacion-vacantes">
                            <AdminButton>
                                Publicar Oportunidades Laborales
                            </AdminButton>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <NavLink href="/lista-aplicantes">
                            <AdminButton>Ver Aplicantes</AdminButton>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default AdminInterface;
