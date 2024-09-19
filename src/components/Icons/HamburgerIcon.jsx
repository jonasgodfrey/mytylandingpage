import React from "react";
import classes from './Hamburger.module.scss';
import { useState } from "react";
const HamburgerIcon = ({openNav}) => {
    
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes.hamburger}
      onClick={openNav}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export default HamburgerIcon;
