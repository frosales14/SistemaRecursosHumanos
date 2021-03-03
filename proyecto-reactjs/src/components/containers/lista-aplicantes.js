import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import axios from 'axios';

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

const ListaAplicantes = () => {
  const { root, containerMain } = useStyles();

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
      field: "vacante",
      headerClassName: "headers",
      headerName: "VACANTE",
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


const baseUrl="http://localhost:4000/aplicantes-por-puntuacion";

const [data, setData] = useState([]);

const getData = async () => {
  await axios.get (baseUrl)
    .then(response=>{
     setData(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

useEffect(() => {
    getData()
}, []);

  return (
    <Layout>
      <Container>
        <Grid item container justify="center" spacing={4}>
          <Grid item>
            <Title>APLICANTES</Title>
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
                rows={data}
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


export default ListaAplicantes;
