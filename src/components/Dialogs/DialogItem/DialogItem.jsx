import React from "react";
import c from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog + " " + c.active}>
      <img
        src="https://media.istockphoto.com/id/885237306/vector/female-avatar-profile-picture-green-earth-volunteer-member-silhouette-light-shadow.jpg?s=170667a&w=0&k=20&c=kghwT6ZkR9rpH3UdqNPcPNcbKFLk2URWyy1poKjwaTo="
        alt=""
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
