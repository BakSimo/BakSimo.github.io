import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <div className={c.itemInfo}>
        <img
          src="https://media.istockphoto.com/id/885237306/vector/female-avatar-profile-picture-green-earth-volunteer-member-silhouette-light-shadow.jpg?s=170667a&w=0&k=20&c=kghwT6ZkR9rpH3UdqNPcPNcbKFLk2URWyy1poKjwaTo="
          alt=""
        />
        {props.message}
      </div>
      <div>
        <span>Like </span>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
