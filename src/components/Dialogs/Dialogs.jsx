import React from "react";
import classes from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink to="/dialogs/1">Alan</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2">Nazim</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3">Katya</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4">Alina</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are you?</div>
        <div className={classes.message}>Nice!!</div>
      </div>
    </div>
  );
};

export default Dialogs;
