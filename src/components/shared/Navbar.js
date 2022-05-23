import React from "react";
import { useNavbarStyles } from "../../styles";
import { AppBar } from '@material-ui/core'
import classes from "*.module.css";

function Navbar() {
  useNavbarStyles();

  return (
    <AppBar className = {classes.appBar} >
      <section className={classes.section} >
        <Logo />
      </section>
      </AppBar>
  )
}

export default Navbar;
