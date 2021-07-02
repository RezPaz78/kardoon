import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { theme } from "../../utils/theme";
import { Link as RRDLink, useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";
import { axiosInstance } from "../../services/axios";
import { toast } from "react-toastify";


const useStyles = makeStyles((theme) => ({
  profilePage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  profileContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    height: "50%",
    minHeight: "25rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "1rem",
    padding: "2rem",
    boxShadow: `0 0 20px ${theme.palette.primary.main}`,
  },
  userIcon: {
    border: `0.3rem solid ${theme.palette.primary.main}`,
    borderRadius: "100%",
    width: "fit-content",
    height: "fit-content",
    marginBottom: "1rem"
  },
  profileRow: {
    textAlign: "left",
    width: "100%",
  },
  nameInput: {
    marginRight: "1rem",
    marginBottom: "1rem"
  },
  emailInput: {
    width: "100%",
    marginBottom: "1rem"
  },
  submitButton: {
    color: "white",
  },
  homeButton: {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
  }
}));

const Index = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const id = useLocalStorage("id");
  const token = useLocalStorage("token");
  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .get(`/user/${id}`)
      .then((res) => {
        setEmail(res.data.email);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
      })
      .catch((error) => toast.error("!بازیابی اطلاعات شما با خطا مواجه شد"));
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
    };
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .put(`/user/${id}`, data, config)
      .then((res) => {
        if (res.data.message === "کاربر با موفقیت ویرایش شد") {
          toast.success(res.data.message);
        }
      })
      .catch((error) => toast.error("ویرایش کاربر با خطا مواجه شد!"));
  };

  const logoutHandler = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance.post("/logout", {}, config).then((res) => {
      localStorage.clear();
      toast.success("شما با موفقیت خارج شدید!");
      history.push('/');
    });
  };

  return (
    <div className={classes.profilePage}>
      <form
        className={classes.profileContainer}
        onSubmit={(event) => submit(event)}
      >
        <div className={classes.userIcon}>
          <PermIdentityIcon
            style={{
              color: theme.palette.primary.main,
              width: "6rem",
              height: "6rem",
            }}
          />
        </div>

        {email && firstName && lastName && (
          <>
            <div className={classes.profileRow}>
              <TextField
                className={classes.nameInput}
                required
                id="outlined-required"
                label="نام"
                defaultValue="Hello World"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="نام خانوادگی"
                defaultValue="Hello World"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={classes.profileRow}>
              <TextField
                className={classes.emailInput}
                required
                id="outlined-required"
                label="ایمیل"
                defaultValue="Hello World"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        )}

        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submitButton}
          >
            ثبت
          </Button>
          <div className={classes.homeButton}>
            <Link variant="contained" component={RRDLink} to="/" >
              صفحه‌ی اصلی
            </Link>
            <Button
                color="secondary"
                type="button"
                onClick={logoutHandler}
            >
              خروج
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
