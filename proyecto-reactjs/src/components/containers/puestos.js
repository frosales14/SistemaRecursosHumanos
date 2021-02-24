import React from "react";
import { Grid, Typography, Container, InputLabel, FormControl, Select, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Layout from "../components/layout";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerMain: {
    marginBottom: theme.spacing(10),
  },
  papers: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(2),
  },
  nombrePuesto: {
    padding: theme.spacing(2),
  },
  infoPuesto: {
    fontSize: "15px",
    lineHeight: "25px",
    letterSpacing: "0em",
    /*     textTransform: "uppercase", */
  },
  infoVacantes: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    fontSize: "1.2rem",
    fontStyle: "bold",
  },
  boton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    border: 0,
  },
  textBoton: {
    color: "#FFFFFF",
  },
  formControl: {
    minWidth: 200
  }
}));

const Puestos = () => {
  const {
    containerMain,
    papers,
    title,
    nombrePuesto,
    infoPuesto,
    infoVacantes,
    boton,
    textBoton,
    formControl
  } = useStyles();
  return (
    <Layout>
      <Container>
        <Grid
          item
          container
          spacing={0}
          xs={12}
          md={12}
          lg={12}
          justify="center"
        >
          <Grid item>
            <Typography variant={"h4"} className={title}>
              PLAZAS DISPONIBLES
            </Typography>
          </Grid>
        </Grid>

        <Grid container item justify="center" spacing={4}>
          <Grid item>
            <FormControl className={formControl}>
              <InputLabel>Departamentos</InputLabel>
              <Select>
                <MenuItem value='IT'>IT</MenuItem>
                <MenuItem value='Marketing'>Marketing</MenuItem>
                <MenuItem value='HR'>HR</MenuItem>
                <MenuItem value='Ventas'>Ventas</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        </Grid>

        <Grid container className={containerMain} spacing={4}>
          <Grid item container spacing={1} xs={12} md={6} lg={3}>
            <Grid item>
              <Paper className={papers}>
                <Typography variant={"h4"} className={nombrePuesto}>
                  PLAZA 1
                </Typography>
                <Typography className={infoPuesto}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac blandit leo. Sed efficitur nisi vel leo luctus,
                  sed accumsan erat viverra. Curabitur facilisis ornare
                  ultrices. Aenean ullamcorper egestas convallis. Phasellus ut
                  dui lacinia, facilisis risus non, tempor augue. Etiam magna
                  felis, eleifend ac bibendum a, blandit ut justo. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum sed semper quam, sit amet
                  consequat urna. Vestibulum vitae velit sit amet nisl
                  vestibulum efficitur vitae ut enim.
                </Typography>
                <Grid item>
                  <Typography className={infoVacantes} variant={"h6"}>
                    VACANTES DISPONIBLES
                  </Typography>
                  <Typography className={infoVacantes} variant={"h6"}>
                    FECHA DE CONTRATACIÓN
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    className={boton}
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                    fullWidth="true"
                  >
                    <Typography className={textBoton} variant={"h6"}>
                      APLICAR
                    </Typography>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={12} md={6} lg={3}>
            <Grid item>
              <Paper className={papers}>
                <Typography variant={"h4"} className={nombrePuesto}>
                  PLAZA 2
                </Typography>
                <Typography className={infoPuesto}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac blandit leo. Sed efficitur nisi vel leo luctus,
                  sed accumsan erat viverra. Curabitur facilisis ornare
                  ultrices. Aenean ullamcorper egestas convallis. Phasellus ut
                  dui lacinia, facilisis risus non, tempor augue. Etiam magna
                  felis, eleifend ac bibendum a, blandit ut justo. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum sed semper quam, sit amet
                  consequat urna. Vestibulum vitae velit sit amet nisl
                  vestibulum efficitur vitae ut enim.
                </Typography>
                <Grid item>
                  <Typography className={infoVacantes} variant={"h6"}>
                    VACANTES DISPONIBLES
                  </Typography>
                  <Typography className={infoVacantes} variant={"h6"}>
                    FECHA DE CONTRATACIÓN
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    className={boton}
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                    fullWidth="true"
                  >
                    <Typography className={textBoton} variant={"h6"}>
                      APLICAR
                    </Typography>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={12} md={6} lg={3}>
            <Grid item>
              <Paper className={papers}>
                <Typography variant={"h4"} className={nombrePuesto}>
                  PLAZA 3
                </Typography>
                <Typography className={infoPuesto}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac blandit leo. Sed efficitur nisi vel leo luctus,
                  sed accumsan erat viverra. Curabitur facilisis ornare
                  ultrices. Aenean ullamcorper egestas convallis. Phasellus ut
                  dui lacinia, facilisis risus non, tempor augue. Etiam magna
                  felis, eleifend ac bibendum a, blandit ut justo. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum sed semper quam, sit amet
                  consequat urna. Vestibulum vitae velit sit amet nisl
                  vestibulum efficitur vitae ut enim.
                </Typography>
                <Grid item>
                  <Typography className={infoVacantes} variant={"h6"}>
                    VACANTES DISPONIBLES
                  </Typography>
                  <Typography className={infoVacantes} variant={"h6"}>
                    FECHA DE CONTRATACIÓN
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    className={boton}
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                    fullWidth="true"
                  >
                    <Typography className={textBoton} variant={"h6"}>
                      APLICAR
                    </Typography>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={12} md={6} lg={3}>
            <Grid item>
              <Paper className={papers}>
                <Typography variant={"h4"} className={nombrePuesto}>
                  PLAZA 4
                </Typography>
                <Typography className={infoPuesto}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac blandit leo. Sed efficitur nisi vel leo luctus,
                  sed accumsan erat viverra. Curabitur facilisis ornare
                  ultrices. Aenean ullamcorper egestas convallis. Phasellus ut
                  dui lacinia, facilisis risus non, tempor augue. Etiam magna
                  felis, eleifend ac bibendum a, blandit ut justo. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum sed semper quam, sit amet
                  consequat urna. Vestibulum vitae velit sit amet nisl
                  vestibulum efficitur vitae ut enim.
                </Typography>
                <Grid item>
                  <Typography className={infoVacantes} variant={"h6"}>
                    VACANTES DISPONIBLES
                  </Typography>
                  <Typography className={infoVacantes} variant={"h6"}>
                    FECHA DE CONTRATACIÓN
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    className={boton}
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                    fullWidth="true"
                  >
                    <Typography className={textBoton} variant={"h6"}>
                      APLICAR
                    </Typography>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Puestos;
