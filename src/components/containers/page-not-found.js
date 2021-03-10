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

const PageNotFound = () => {
    return (
        <Layout>
            <Container>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Header1>404 - No existe la ruta asignada</Header1>
                    </Grid>
                    <Grid item>
                        <NavLink href="/">
                            <PrimaryButton
                                variant="contained"
                                color="secondary"
                                disableElevation
                                size="large"
                            >
                                Regresar a Pagina principal
                            </PrimaryButton>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default PageNotFound;
