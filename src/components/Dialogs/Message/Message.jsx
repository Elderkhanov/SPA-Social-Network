import React from "react";
import classes from "../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  return <div className={classes.message}>{props.text}</div>;
};

export default Message;
