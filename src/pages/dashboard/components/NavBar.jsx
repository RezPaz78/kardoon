import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useLocalStorage } from "../../../utils/hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "bold",
  },
  userButton: {
    width: "10rem",
    display: "flex",
    justifyContent: "space-between",
  },
  username: {
    fontSize: "1rem",
    color: "white",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const firstName = useLocalStorage("firstName");
  const lastName = useLocalStorage("lastName");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.userButton} color="inherit">
            <AccountCircleOutlinedIcon
              fontSize="large"
              style={{ color: "white" }}
            />
            <p className={classes.username}>{firstName + " " + lastName}</p>
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
