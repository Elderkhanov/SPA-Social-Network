import React from "react";
import classes from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.text}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Alan" },
    { id: 2, name: "Nazim" },
    { id: 3, name: "Katya" },
    { id: 4, name: "Alina" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesData = [
    { id: 1, text: "Hi" },
    { id: 2, text: "How are you" },
    { id: 3, text: "Nice!!!" },
  ];

  let messagesElements = messagesData.map((messages) => (
    <Message text={messages.text} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        {dialogsElements}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
      </div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
