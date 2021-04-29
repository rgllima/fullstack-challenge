import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../pages/Home";
import {
  Box,
  Grid,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import adminStyles from "./Styles";
import SideBar from "../../components/SideBar";
import Professional from "../../pages/Professional";
import Profession from "../../pages/Profession";

const useStyles = makeStyles((theme) => adminStyles(theme));

const AdminLayout = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={handleDrawerOpen} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <SideBar onNavClick={handleDrawerClose} className={classes.drawer}/>
      </Drawer>

      <Grid className={classes.container} container>
        <Grid className={classes.sideBar}  item md={2}>
          <SideBar/>
        </Grid>

        <Grid className={classes.content} item xs={12} md={10}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/professionals" exact component={Professional} />
            <Route path="/professions" exact component={Profession} />
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminLayout
