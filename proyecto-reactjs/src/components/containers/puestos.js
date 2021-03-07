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

const Title = styled(Typography)`
  font-family: Monserrat Bold;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2.3rem;
  letter-spacing: 2px;
  text-align: center;
`;

const Dept = styled(Typography)`
  font-family: Monserrat Regular;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 1rem;
`;

const Plazas = styled(Typography)`
  font-family: Monserrat Regular;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 2px;
`;

const Description = styled(Typography)`
  font-family: Monserrat Light;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 1rem;
`;

const Info1 = styled(Typography)`
  font-family: Monserrat Bold;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 1rem;
`;

const ButtonFont = styled(Typography)`
  font-family: Monserrat Regular;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 2.5px;
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
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  nombrePuesto: {
    padding: theme.spacing(2),
  },
  infoVacantes: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  boton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  textBoton: {
    color: "#FFFFFF",
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
    infoVacantes,
    boton,
    textBoton,
    formControl,
  } = useStyles();

  const valoresDrop = [
    {
      valor: "IT",
    },
    {
      valor: "Marketing",
    },
    {
      valor: "Marketing",
    },
  ];

  const [puestos, setPuestos] = useState([]);

    const getVacantes = async () => {
        
       await axios.get('https://hr-server-js.herokuapp.com/vacantes')
      .then((res)=>{setPuestos(
        res.data.vacantes
      )}
      )  
      .catch((err)=> {console.log(err)})
    };

    useEffect(() => {
        getVacantes()
    }, []);

    // console.log({vacantes})

  return (
    <Layout>
      <Container>
        <Grid item container spacing={0} justify="center">
          <Grid item>
            <Title className={title}>PLAZAS DISPONIBLES</Title>
          </Grid>
        </Grid>

        <Grid container item justify="center" spacing={4}>
          <Grid item>
            <FormControl className={formControl}>
              <InputLabel>
                <Dept>Departamentos</Dept>
              </InputLabel>
              <Select>
                <Dept>
                  {valoresDrop.map((item) => {
                    return <MenuItem value={item.valor}>{item.valor}</MenuItem>;
                  })}
                </Dept>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container className={containerMain} spacing={3}>
          <Grid item container spacing={3} md={12} xs={12} direction="row">
            {puestos.map((puesto, index) => {
              return (
                <Grid item key={index} md={3} xs={12} sm={6}>
                  <Paper className={papers}>
                    <Plazas className={nombrePuesto}>{puesto.nombre}</Plazas>
                    <Description>{puesto.descripcion}</Description>
                    <Grid item>
                      <Info1 className={infoVacantes}>
                        {puesto.totalvacantes}
                      </Info1>
                      <Info1 className={infoVacantes}>{puesto.ciudad}</Info1>
                    </Grid>
                    <Grid item>
                      <Info1 className={infoVacantes}>
                        {puesto.departamento}
                      </Info1>
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
                          <ButtonFont className={textBoton}>APLICAR</ButtonFont>
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
