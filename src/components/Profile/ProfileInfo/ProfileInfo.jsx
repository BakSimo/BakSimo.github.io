import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={c.profileInfo}>
      <div className={c.userAvatar}>
        <img
          src="https://media.istockphoto.com/id/885237786/vector/female-avatar-profile-picture-gold-member-silhouette-light-shadow.jpg?s=170667a&w=0&k=20&c=mNLeA175yOCz0ro9c0x3nkmwcWOF_l9o6dLv5mWO2wQ="
          alt=""
        />
      </div>
      <div className={c.descriptionBlock}></div>
    </div>
  );
};

export default ProfileInfo;
