import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RRDLink } from "react-router-dom";
import TODO from "../../assets/img/todo.png";
import SEO from "../../components/seo";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../services/axios";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`تمام حقوق این محصول متعلق به تیم `}
      <Link color="inherit" component={RRDLink} to={"/"}>
        {`کاردون `}
      </Link>
      می‌باشد.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${TODO})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(15),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const passHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    schema
      .isValid({
        email,
        password,
      })
      .then((valid) => {
        if (valid) {
          axiosInstance
            .post("/login", {
              email,
              password,
            })
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              history.push("/");
            })
            .catch((error) => console.log(error));
        }
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <SEO title="کاردون" />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => emailHandler(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => passHandler(event)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
            >
              ورود
            </Button>
            <Box mt={2}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Link component={RRDLink} to={"/"}>
                    بازگشت به صفحه‌ی اصلی
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RRDLink} to={"/signUp"} variant="body2">
                    اکانت ندارید؟ ثبت نام کنید.
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
        <Box mt={20}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
