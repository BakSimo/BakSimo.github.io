import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <div className={c.itemInfo}>
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSKTvT_HQKHg7lSWAWU-dOMYhpZ2xYRSffu8H3X6w=s900-c-k-c0x00ffffff-no-rj"
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
