import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }  
//  60 60 60 60 60 60  60 60 60 60 60 60  60 60 
  return (
    <div className={c.profileInfo}>
      <img src={props.profile.photos.large} alt="" />
      <div className={c.userInfo}>
        <div className={c.userFirstName}>First name: git</div>
        <div className={c.userLastName}>Last name: Ko</div>
        <div className={c.serBournDate}>Date of birth: 01.03.2005</div>
        <div className={c.userPostsCount}>Posts count: 4</div>
      </div>
      {/* <div className={c.descriptionBlock}></div> */}
    </div>
  );
};

export default ProfileInfo;
