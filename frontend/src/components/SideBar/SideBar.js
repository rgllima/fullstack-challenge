import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from 'react-router-dom'
import ManagerImage from "../../assets/manager.png"
import sideBarStyles from "./Styles";
import Navigation from "../Navigation";

const useStyles = makeStyles((theme) => sideBarStyles(theme));


const SideBar = ({ onNavClick = () => {} }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const routes = [
    {
      name: "Início",
      path: "/"
    },
    {
      name: "Profissionais",
      path: "/professionals"
    },
    {
      name: "Profissões",
      path: "/professions"
    }
  ];

  const buildRoutes = () => routes.map(route => (
    <Grid item key={route.path}>
      <Navigation
        title={route.name}
        active={location.pathname === route.path}
        onClick={() => [onNavClick(), history.push(route.path)]}
      />
    </Grid>
  ));

  return (
    <Box className={classes.box}>
      <Grid className={classes.container} container>
        <Grid className={classes.wrap} item>
          <img className={classes.image} src={ManagerImage} alt="manager" />
        </Grid>

        {buildRoutes()}
      </Grid>
    </Box>
  );
}

export default SideBar;
