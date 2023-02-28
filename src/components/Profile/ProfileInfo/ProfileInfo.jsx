import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={c.profileInfo}>
      <img
        src="https://media.istockphoto.com/id/885237786/vector/female-avatar-profile-picture-gold-member-silhouette-light-shadow.jpg?s=170667a&w=0&k=20&c=mNLeA175yOCz0ro9c0x3nkmwcWOF_l9o6dLv5mWO2wQ="
        alt=""
      />
      <div className={c.userInfo}>
        <div className={c.userFirstName}>First name: git</div>
        <div className={c.userLastName}>Last name: Ko</div>
        <div className={c.serBournDate}>Bourn date: 01.03.2005</div>
        <div className={c.userPostsCount}>Posts count: 4</div>
      </div>
      {/* <div className={c.descriptionBlock}></div> */}
    </div>
  );
};

export default ProfileInfo;
