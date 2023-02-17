import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog + " " + c.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={c.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Jack" },
    { id: 2, name: "John" },
    { id: 3, name: "Max" },
    { id: 4, name: "Katy" },
    { id: 5, name: "Alex" },
  ];

  let messages = [
    { id: 1, message: "Hello World!" },
    { id: 2, message: "Hi!" },
    { id: 3, message: "Hi guys" },
    { id: 4, message: "Wats up!" },
    { id: 5, message: "Created by Ko" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
