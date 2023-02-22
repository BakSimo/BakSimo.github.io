import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={c.profileInfo}>
      <div className={c.userAvatar}>
        <img
          src="https://www.pngitem.com/pimgs/m/41-414928_face-head-line-art-clip-and-white-symbol.png"
          alt=""
        />
      </div>
      <div className={c.descriptionBlock}>Description</div>
    </div>
  );
};

export default ProfileInfo;
