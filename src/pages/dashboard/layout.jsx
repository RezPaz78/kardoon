import React from "react";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";
import Index from "./Index";
import SEO from "../../components/seo";

const useStyles = makeStyles((theme) => ({
  body: {
    direction: "rtl",
    flexGrow: 1,
  },
  content: {
    minHeight: "calc(100vh - 4rem)",
  },
  sidebar: {
    position: "relative",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <SEO title="کاردون | داشبورد" />
      <Grid container className={classes.body}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid className={classes.sidebar} item xs={2} spacing={0}>
          <SideBar />
        </Grid>
        <Grid className={classes.content} item xs={10} spacing={0}>
          <Index />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
