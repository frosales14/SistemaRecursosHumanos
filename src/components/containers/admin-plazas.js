import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const Title = styled(Typography)`
  font-family: Monserrat Bold;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .headers": {
      backgroundColor: "rgba(2, 221, 251, 1)",
    },
  },
  containerMain: {
    marginBottom: theme.spacing(6),
  },
}));

const AdminPlazas = () => {
  const { root, containerMain } = useStyles();

  const columns = [
    {
      field: "id",
      headerClassName: "headers",
      headerName: "ID",
      width: 70,
    },
    {
      field: "nombre",
      headerClassName: "headers",
      headerName: "NOMBRE",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "departamento",
      headerClassName: "headers",
      headerName: "DEPARTAMENTO",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cantidad",
      headerClassName: "headers",
      headerName: "DISPONIBLES",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ciudad",
      headerClassName: "headers",
      headerName: "CIUDAD",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "edit",
      headerClassName: "headers",
      headerName: "ACCIÓN",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" color="secondary" size="small" fullWidth>
          EDITAR
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      nombre: "Gerente",
      departamento: "IT",
      cantidad: 2,
      ciudad: "SPS",
    },
  ];
  return (
    <Layout>
      <Container>
        <Grid item container justify="center" spacing={4}>
          <Grid item>
            <Title>PLAZAS</Title>
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
                disableColumnMenu="true"
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

export default AdminPlazas;
