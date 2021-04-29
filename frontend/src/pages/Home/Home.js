import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import homeStyles from "./Styles";

const useStyles = makeStyles((theme) => homeStyles(theme));

const Home = () => {
  const classes = useStyles();

  return <Container className={classes.root}>Página Inicial</Container>
}

export default Home
