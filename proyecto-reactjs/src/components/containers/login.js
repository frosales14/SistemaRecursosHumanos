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
} from '@material-ui/core';
import styled from 'styled-components';
import Layout from '../components/layout';

// async function loginUser(credentials) {
//     return fetch('http://localhost:4000/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//     }).then((data) => data.json());
// }

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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const classes = useStyles();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //         username,
    //         password,
    //     });
    //     setToken(token);
    // };

    return (
        <Layout>
            <Container fixed maxWidth="xl">
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <Grid item>
                            <Typography>Nombre de Usuario</Typography>
                            <CustomInput id="username" fullWidth />
                        </Grid>
                        <Grid item>
                            <Typography>Contraseña</Typography>
                            <CustomInput id="password" fullWidth />
                        </Grid>
                        <Grid item container justify="flex-end">
                            <CustomButton className={classes.margin}>
                                Ingresar
                            </CustomButton>
                        </Grid>
                    </form>
                </Grid>
            </Container>
        </Layout>
    );
};

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired,
// };

export default Login;
