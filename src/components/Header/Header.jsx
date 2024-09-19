import React from "react";
import classes from "./Header.module.scss";
import logoWhite from "../../assets/logo_white.png";
import HamburgerIcon from "../Icons/HamburgerIcon";
const Header = ({ openNav }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logoWhite} alt="logo" />
      </div>
      <HamburgerIcon openNav={openNav} />
      <div className={classes.callToAction}>
        <span className={classes.signIn}>
          {" "}
          <a href="#" className={classes.signInLink}>
            Sign in
          </a>
        </span>
        <span className={classes.createAccount}>
          <a href="#" className={classes.createAccountLink}>
            Create Account
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
