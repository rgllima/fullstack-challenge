import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import navigationStyles from "./Styles";

const useStyles = makeStyles((theme) => navigationStyles(theme));

const Navigation = ({title, active = false, onClick}) => {
  const classes = useStyles();

  return (
    <Box
      className={`${classes.box} ${ active ? classes.boxActive : ''}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </Box>
  )
}

export default Navigation
