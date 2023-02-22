import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={c.profileInfo}>
      <div className={c.userAvatar}>
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSKTvT_HQKHg7lSWAWU-dOMYhpZ2xYRSffu8H3X6w=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
      <div className={c.descriptionBlock}>Description</div>
    </div>
  );
};

export default ProfileInfo;
