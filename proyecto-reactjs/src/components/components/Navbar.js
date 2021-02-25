import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Hidden,
  Container,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MobileAppBar from "./mobileNavBar";
import comex from "../imgs/comex.png";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  botonesNav: {
    flexGrow: 1,
    margin: theme.spacing(1),
    border: 0,
  },
  img: {
    maxWidth: "150px",
    height: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const menu = [
    { name: "Inicio", path: "" },
    { name: "Puestos", path: "" },
    { name: "Nosotros", path: "" },
    { name: "Como Aplicar", path: "" },
  ];

  return (
    <div>
      <Container fixed maxWidth="xl">
        <Hidden mdDown>
          <AppBar color="#FFFFF" elevation={1}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img className={classes.img} src={comex} alt="logo-comex"></img>
              </Typography>
              {menu.map((item) => {
                return (
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.botonesNav}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Toolbar>
          </AppBar>
        </Hidden>
      </Container>
      <MobileAppBar />
    </div>
  );
};

export default Navbar;
