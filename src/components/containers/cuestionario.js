import {
    Container,
    Grid,
    Typography,
    FormControl,
    Select,
    MenuItem,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { CloudinaryContext, Image } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from '../../CloudinaryService';

const NavLink = styled.a`
    text-decoration: none;
`;

const Title = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    text-align: center;
`;

const Title2 = styled(Typography)`
    font-family: Monserrat Bold;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 1.2px;
    text-align: center;
    color: #02ddfb;
`;

const Pregunta = styled(Typography)`
    font-family: Monserrat Bold;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 1.2px;
`;

const ButtonFont = styled(Typography)`
    font-family: Monserrat Regular;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2px;
    cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
    containerMain: {
        marginBottom: theme.spacing(10),
    },
    title2: {
        marginTop: theme.spacing(2),
    },
    gridPreguntas: {
        marginTop: theme.spacing(4),
    },
    formControl: {
        marginBottom: theme.spacing(3),
    },
    boton: {
        padding: theme.spacing(1),
        border: 0,
    },
    textBoton: {
        color: '#FFFFFF',
    },
    input: {
        display: 'none',
    },
}));

const Cuestionario = () => {
    const {
        containerMain,
        title2,
        gridPreguntas,
        formControl,
        boton,
        textBoton,
        input,
    } = useStyles();

    const [cuestionario, setCuestionario] = useState([]);

    const [value, setDropDownValue] = useState('');

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setDropDownValue(value);
        console.log(value);
    };

    const getCuestionario = async () => {
        await axios
            .get('https://hr-server-js.herokuapp.com/pregunta')
            .then((response) => {
                setCuestionario(response.data.preguntas);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCuestionario();
    }, []);

    const [images, setImages] = useState([]);
    let url;

    const beginUpload = (tag) => {
        const uploadOptions = {
            cloudName: 'dgauerlpt',
            tags: [tag],
            uploadPreset: 'upload',
        };
        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                console.log(photos);
                if (photos.event === 'success') {
                    setImages([...images, photos.info.public_id]);
                }
            } else {
                console.log(error);
            }
        });
    };

    return (
        <Layout>
            <Container>
                <Grid
                    container
                    className={containerMain}
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        container
                        xs={12}
                        md={12}
                        lg={12}
                        justify="center"
                    >
                        <Grid item>
                            <Title>Cuestionario del puesto</Title>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        md={6}
                        className={title2}
                        justify="center"
                    >
                        <Grid item md={12} xs={12} sm={12}>
                            <Title2>
                                Por favor no recargar o abandonar esta pagina ya
                                que las respuestas podrian no guardarse.
                            </Title2>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        md={10}
                        xs={12}
                        className={gridPreguntas}
                    >
                        {cuestionario.map((pregunta) => {
                            return (
                                <Grid item md={12} xs={12} sm={12}>
                                    <Pregunta>{pregunta.pregunta}</Pregunta>
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                        className={formControl}
                                    >
                                        <Select onChange={handleDropdownChange}>
                                            <MenuItem
                                                value={pregunta.respuesta}
                                            >
                                                {pregunta.respuesta}
                                            </MenuItem>
                                            <MenuItem
                                                value={pregunta.respuesta2}
                                            >
                                                {pregunta.respuesta2}
                                            </MenuItem>
                                            <MenuItem
                                                value={pregunta.respuesta3}
                                            >
                                                {pregunta.respuesta3}
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            );
                        })}
                        <Grid item container alignItems="center" spacing={3}>
                            <Grid item>
                                <CloudinaryContext cloudName="dgauerlpt">
                                    <Button
                                        className={boton}
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        size="large"
                                        component="span"
                                    >
                                        <ButtonFont
                                            className={textBoton}
                                            onClick={() => beginUpload('image')}
                                        >
                                            CARGAR CV
                                        </ButtonFont>
                                    </Button>
                                </CloudinaryContext>
                            </Grid>
                            <Grid item>
                                <NavLink href="/">
                                    <Button
                                        className={boton}
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        size="large"
                                        component="span"
                                    >
                                        <ButtonFont className={textBoton}>
                                            ENVIAR
                                        </ButtonFont>
                                    </Button>
                                </NavLink>
                                <NavLink href= {`https://res.cloudinary.com/dgauerlpt/image/upload/fl_attachment:cv/url.jpg`}>
                                    <Button
                                        className={boton}
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        size="large"
                                        component="span"
                                    >
                                        <ButtonFont className={textBoton}>
                                            DESC
                                        </ButtonFont>
                                    </Button>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Cuestionario;
