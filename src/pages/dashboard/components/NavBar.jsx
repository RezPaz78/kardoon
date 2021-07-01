import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userButton: {
    width: "10rem",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const NavBar = (props) => {
    const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.userButton} color="inherit">
            <AccountCircleOutlinedIcon fontSize="large" />
            <p></p>
          </Button>
          <Typography variant="h6" className={classes.title}>
            کاردونی
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
