import React from "react";
import classes from "./Header.module.scss";
import logoWhite from "../../assets/logo_white.png";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logoWhite} alt="logo" />
      </div>
      <div className={classes.callToAction}>
        <span className={classes.signIn}>
          {" "}
          <a href="#">Sign in</a>
        </span>
        <span className={classes.createAccount}>
          <a href="#">Create Account</a>
        </span>
      </div>
    </header>
  );
};

export default Header;
