import React from "react";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Header__title}>Budget tracker</h1>
    </div>
  );
};

export default Header;
