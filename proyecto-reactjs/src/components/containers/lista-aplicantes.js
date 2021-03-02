import React from "react";
import Layout from "../components/layout";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .headers": {
      backgroundColor: "rgba(2, 221, 251, 1)",
    },
  },
  containerMain: {
    marginBottom: theme.spacing(6),
  },
  titulo: {
    fontSize: "2rem",
  },
}));

const ListaAplicantes = () => {
  const { root, titulo, containerMain } = useStyles();

  const [unchecked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const columns = [
    { field: "id", headerClassName: "headers", headerName: "ID", width: 70 },
    {
      field: "nombre",
      headerClassName: "headers",
      headerName: "NOMBRE",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "telefono",
      headerClassName: "headers",
      headerName: "TELÉFONO",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "puntuacion",
      headerClassName: "headers",
      headerName: "PUNTUACIÓN",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "visto",
      headerClassName: "headers",
      headerName: "VISTO",

      headerAlign: "center",
      renderCell: (params) => (
        <Checkbox
          align="center"
          unchecked={unchecked}
          onChange={handleChange}
        />
      ),
    },
    {
      field: "cv",
      headerClassName: "headers",
      headerName: "CV",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" color="secondary" size="small" fullWidth>
          VER
        </Button>
      ),
    },
  ];

  const rows = [
    { id: 1, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 2, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 3, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 4, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 5, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 6, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 7, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
    { id: 8, nombre: "Juan Perez", telefono: 98144565, puntuacion: 100 },
  ];
  return (
    <Layout>
      <Container>
        <Grid item container justify="center" spacing={4}>
          <Grid item>
            <Typography className={titulo}>APLICANTES</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={containerMain}
          spacing={10}
          justify="center"
          alignItems="center"
        >
          <Grid item container md={12} xs={12}>
            <Grid item md={12} xs={12} sm={12} className={root}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                autoHeight="true"
                disableSelectionOnClick="true"
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ListaAplicantes;
