import {
    Container,
    Grid,
    Typography,
    FormControl,
    Select,
    MenuItem,
} from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService";

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

    const preguntas = [
        {
            pregunta: 'Pregunta 1',
        },
        {
            pregunta: 'Pregunta 2',
        },
        {
            pregunta: 'Pregunta 3',
        },
        {
            pregunta: 'Pregunta 4',
        },
        {
            pregunta: 'Pregunta 5',
        },
        {
            pregunta: 'Pregunta 6',
        },
        {
            pregunta: 'Pregunta 7',
        },
    ];

    const dropDownValue = [
        { valor: 'Mario' },
        { valor: 'José' },
        { valor: 'Andrés' },
    ];

    const [value, setDropDownValue] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setDropDownValue(value);
        console.log(value);
    };

    const changeHandler = (event) => {
        console.log(event);
        // setSelectedFile(event.target.files[0]);
        // setIsFilePicked(true);
    };

    const handleSubmission = () => {
        console.log('handle');
    };


    const [images, setImages] = useState([]);

    const beginUpload = tag => {
        const uploadOptions = {
          cloudName: "dgauerlpt",
          tags: [tag],
          uploadPreset: "upload"
        };
      
        openUploadWidget(uploadOptions, (error, photos) => {
          if (!error) {
            console.log(photos);
            if(photos.event === 'success'){
              setImages([...images, photos.info.public_id])
            }
          } else {
            console.log(error);
          }
        })
      }

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
                        {preguntas.map((pregunta) => {
                            return (
                                <Grid item md={12} xs={12} sm={12}>
                                    <Pregunta>{pregunta.pregunta}</Pregunta>
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                        className={formControl}
                                    >
                                        <Select onChange={handleDropdownChange}>
                                            {dropDownValue.map((item) => {
                                                return (
                                                    <MenuItem
                                                        value={item.valor}
                                                    >
                                                        {item.valor}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            );
                        })}
                        <Grid item container justify="center">
                            <input
                                accept=".docx"
                                className={input}
                                id="boton-file-upload"
                                type="file"
                            />
                            <label htmlFor="boton-file-upload">
                                {/* <Button
                  className={boton}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  size="large"
                  component="span"
                >
                  <ButtonFont className={textBoton}>CARGAR CV</ButtonFont>
                </Button> */}
                                <div>
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={changeHandler}
                                    />
                                    <div>
                                        <button onClick={() => beginUpload()}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </label>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <section>
                <CloudinaryContext cloudName="dgauerlpt">
                    <div className="App">
                        <button onClick={() => beginUpload("image")}>Upload Image</button>
                    <section>
                        {images.map(i => <Image
                            key={i}
                            publicId={i}
                            fetch-format="auto"
                            quality="auto"
                            />)}
                    </section>
                    </div>
                </CloudinaryContext>
            </section>
        </Layout>
    );
};

export default Cuestionario;
