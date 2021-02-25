import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Container,
  Hidden,
  TextField,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Layout from "../components/layout";
import imagen from "../imgs/welcome_screen_image.svg";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  containerMain: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(10),
  },
  imagenPrincipal: {
    width: "80%",
    height: "80%",
  },
  papers: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgba(2,221,251,0.7)",
    borderBottomLeftRadius: "35px",
  },
  title: {
    fontSize: "2rem",
    marginTop: theme.spacing(-2.5),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  titleForm: {
    //padding: theme.spacing(1),
    color: "#FFFFFF",
  },
  form: {
    width: "100%",
    padding: theme.spacing(2),
  },
  titleTextfield: {
    fontSize: "15px",
    letterSpacing: "0em",
    color: "#FFFFFF",
    textAlign: "left",
    textTransform: "uppercase",
  },
  textField: {
    padding: theme.spacing(0, 0, 1, 0),
  },
  boton: {
    padding: theme.spacing(1),
    border: 0,
  },
  textBoton: {
    color: "#FFFFFF",
  },
}));

const Registro = () => {
  const {
    containerMain,
    imagenPrincipal,
    papers,
    title,
    titleForm,
    form,
    titleTextfield,
    textField,
    boton,
    textBoton,
  } = useStyles();
  return (
    <Layout>
      <Container fixed max-width="xl">
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
              FORMULARIO DE APLICANTE
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={containerMain}>
          <Hidden smDown>
            <Grid item xs={12} md={6} lg={6}>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <img
                    src={imagen}
                    className={imagenPrincipal}
                    alt="Imagen principal"
                  ></img>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Grid item container justify="center" xs={12} md={6} lg={6}>
            <Grid item>
              <Paper className={papers} square>
                <Typography variant={"h5"} className={titleForm}>
                  LLENA LOS DATOS QUE SE SOLICITAN
                </Typography>
                <form className={form}>
                  <Grid container>
                    <Grid item xs={12} sm={12}>
                      <Typography variant={"h6"} className={titleTextfield}>
                        Puesto a aplicar:
                      </Typography>
                      <TextField
                        className={textField}
                        defaultValue="SE LLENA AUTOMÁTICAMENTE"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12}>
                      <Typography variant={"h6"} className={titleTextfield}>
                        Nombre:
                      </Typography>
                      <TextField
                        className={textField}
                        label="INGRESE SU NOMBRE"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        autoFocus
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12}>
                      <Typography variant={"h6"} className={titleTextfield}>
                        Teléfono:
                      </Typography>
                      <TextField
                        className={textField}
                        variant="outlined"
                        fullWidth
                        color="secondary"
                        required
                        type=""
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              +504
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </form>

                <Grid item container justify="flex-end">
                  <Button
                    className={boton}
                    variant="contained"
                    color="secondary"
                    disableElevation
                    size="large"
                    endIcon={<ArrowForwardIosIcon />}
                  >
                    <Typography className={textBoton} variant={"h6"}>
                      SIGUIENTE
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

export default Registro;
