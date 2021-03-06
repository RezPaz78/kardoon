import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TODO from "../../assets/img/todo2.jpg";
import { Link as RRDLink, useHistory } from "react-router-dom";
import SEO from "../../components/seo";
import { axiosInstance } from "../../services/axios";
import { toast } from "react-toastify";

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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    axiosInstance
      .post("/register", data)
      .then((res) => {
        if (res.data.message === "ثبت‌نام با موفقیت انجام شد") {
          toast.success(res.data.message);
          history.push("/");
        }
      })
      .catch((error) => toast.error("ثبت‌نام شما با خطا مواجه شده است!"));
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
            ثبت ‌نام
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => submitHandler(event)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="نام"
                  autoFocus
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="نام خانوادگی"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="ایمیل"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="رمز عبور"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ثبت‌ نام
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
                  <Link component={RRDLink} to={"/signin"} variant="body2">
                    اکانت دارید؟ وارد شوید.
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
