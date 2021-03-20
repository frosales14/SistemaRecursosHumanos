import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const NavLink = styled.a`
    text-decoration: none;
    width: 100%;
`;

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
        '& .headers': {
            backgroundColor: 'rgba(2, 221, 251, 1)',
        },
    },
    containerMain: {
        marginBottom: theme.spacing(6),
    },
}));

const ListaAplicantes = () => {
    const { root, containerMain } = useStyles();

    const [unchecked, setChecked] = React.useState(true);

    const columns = [
        {
            field: 'id',
            headerClassName: 'headers',
            headerName: 'ID',
            width: 70,
        },
        {
            field: 'nombre',
            headerClassName: 'headers',
            headerName: 'NOMBRE',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'tel',
            headerClassName: 'headers',
            headerName: 'TELEFONO',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'puntuacion',
            headerClassName: 'headers',
            headerName: 'PUNTUACIÓN',
            type: 'number',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'vacante',
            headerClassName: 'headers',
            headerName: 'VACANTE',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        // {
        //     field: 'cv',
        //     headerClassName: 'headers',
        //     headerName: 'CV',
        //     flex: 1,
        //     headerAlign: 'center',
        //     align: 'center',
        //     renderCell: (params) => (
        //         <NavLink
        //             href={`https://res.cloudinary.com/dgauerlpt/raw/upload/fl_attachment:cv/${params.row.URL}`}
        //         >
        //             <Button
        //                 variant="contained"
        //                 color="secondary"
        //                 size="small"
        //                 fullWidth
        //             >
        //                 VER
        //             </Button>
        //         </NavLink>
        //     ),
        // },
    ];

    const baseUrl =
        'https://hr-server-js.herokuapp.com/aplicantes-por-puntuacion';

    const [aplicantes, setAplicantes] = useState([]);

    const getData = async () => {
        await axios
            .get(baseUrl)
            .then((response) => {
                setAplicantes(response.data.aplicantes);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
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
                                rows={aplicantes}
                                columns={columns}
                                pageSize={10}
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
