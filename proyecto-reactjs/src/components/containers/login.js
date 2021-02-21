import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Container,
    Typography,
    makeStyles,
    TextField,
    Button,
    Input,
    Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import Layout from '../components/layout';

function Alert(props) {
    return <MuiAlert elevation={6} variante="filled" {...props} />;
}

const CustomInput = styled(Input)`
    background-color: #02ddfb;
    height: 40px;
    font-size: 15px;
`;

const CustomButton = styled(Button)`
    background-color: #061c32;
    color: white;
    &:hover {
        background-color: #31425c;
    }
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectUser, setIncorrectUser] = useState(false);
    const [correctUser, setCorrectUser] = useState(false);
    const [userSession, setUserSession] = useState(false);
    const [users, setUsers] = useState([
        {
            name: 'carlos@email.com',
            password: 'password',
        },
        {
            name: 'melvin@email.com',
            password: 'password',
        },
    ]);

    const onUserInputChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value.toLowerCase().trim());
    };

    const onPasswordInputChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value.toLowerCase().trim());
    };

    const onLoginSumbit = () => {
        users.map((user) => {
            if (user.name !== username && user.password !== password) {
                setIncorrectUser(true);
            } else {
                setCorrectUser(true);
            }
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIncorrectUser(false);
        setCorrectUser(false);
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
                        <Grid item>
                            <Typography>Nombre de Usuario</Typography>
                            <CustomInput
                                id="username"
                                fullWidth
                                onChange={onUserInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <Typography>Contraseña</Typography>
                            <CustomInput
                                id="password"
                                fullWidth
                                onChange={onPasswordInputChange}
                            />
                        </Grid>
                        <Grid item container justify="flex-end">
                            <CustomButton onClick={onLoginSumbit}>
                                Ingresar
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    open={incorrectUser}
                    autoHideDuration={4000}
                    onClose={handleClose}
                >
                    <Alert severity="error">
                        Usuario o contraseña incorrectos!
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={correctUser}
                    autoHideDuration={4000}
                    onClose={handleClose}
                >
                    <Alert severity="success">Inicio de sesion exitosa!</Alert>
                </Snackbar>
            </Container>
        </Layout>
    );
};

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired,
// };

export default Login;
