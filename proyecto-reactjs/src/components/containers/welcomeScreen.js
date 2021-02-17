import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Layout from '../components/layout';
import imagen from '../imgs/welcome_screen_image.svg';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles(theme =>({
    
    principal:{
      
    },
    contenido:{
        
    },
    contenedor:{ 
        margin: '-16rem 0 0 0',

    },
    textoPrincipal:{
        fontSize: '2.2rem',
        color: '#00BFF6',
        width: '50%',
        maring: '0',
    },
    textoSecundario:{
        fontSize: '1.6rem',
    },
    boton:{
        margin: theme.spacing(2),
        borderRadius: '15px',
    },
    imagenPrincipal:{
        width: '80%',
        height: '80%',
    },
}));

const WelcomeScreen = () => {
    const {principal, textoPrincipal, textoSecundario, boton,contenido, contenedor, imagenPrincipal} = useStyles();
    return (
        <Layout className={principal}>
            <Grid container fixed justify="center" className={contenedor} spacing={2} alignItems="center">
                <Grid item xs={6}  className={contenido}>    
                    <Typography variant="h3" className={textoPrincipal}>
                        ¿LISTO PARA ENCONTRAR EL TRABAJO DE TUS SUEÑOS?
                    </Typography>
                    <Typography className={textoSecundario}>EN COMEX TE ESTAMOS ESPERANDO</Typography>
                    <Button className={boton} variant="outlined" color="secondary" disableElevation size="large">MAS INFO</Button>
                    <Button className={boton} variant="contained" color="secondary" href='#' disableElevation size="large">APLICAR</Button>
                </Grid>
                <Grid item xs={6} className={contenido}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item>
                            <img src = {imagen}  className={imagenPrincipal} alt="Imagen principal"></img>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default WelcomeScreen;