import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        '& > *': {
            margin: theme.spacing(2),
        },
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'static',
    },
}));

const Botones = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>NAVBAR</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi laboriosam molestias quis sunt
                            officia, assumenda a odio unde molestiae, hic
                            debitis voluptate eaque cum numquam! Nobis laborum
                            odit harum animi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi laboriosam molestias quis sunt
                            officia, assumenda a odio unde molestiae, hic
                            debitis voluptate eaque cum numquam! Nobis laborum
                            odit harum animi.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                container
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
            >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            disableElevation
                        >
                            MAS INFO
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            href="https://google.com"
                            disableElevation
                        >
                            APLICAR
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Botones;
