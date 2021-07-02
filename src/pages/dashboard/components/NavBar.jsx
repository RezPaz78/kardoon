import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useLocalStorage } from "../../../utils/hooks/useLocalStorage";
import { axiosInstance } from "../../../services/axios";
import { toast } from "react-toastify";
import { Link as RRDLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

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
    alignItems: "center",
  },
  username: {
    fontSize: "1rem",
    color: "white",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const id = useLocalStorage("id");
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/user/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) =>
        toast.error("بازیابی اطلاعات شما با خطا مواجه شده است!")
      );
  }, [id]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/profile"
            component={RRDLink}
            className={classes.userButton}
            color="inherit"
          >
            <AccountCircleOutlinedIcon
              fontSize="large"
              style={{ color: "white" }}
            />
            {user && (
              <p className={classes.username}>
                {user.first_name + " " + user.last_name}
              </p>
            )}
          </Link>
          <Typography variant="h6" className={classes.title}>
            کاردونی
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
