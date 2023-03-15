import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../Assets/img/stock-avatar.jpg";
import c from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 4;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className={c.users}>
      {props.users.map((u) => (
        <div className={c.userInfo} key={u.id}>
          <div className={c.photoBlock}>
            <div className={c.userPhoto}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className={c.userPublicInfo}>
            <div className={c.userName}>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            {/* <div className={c.userLocation}>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div> */}
            <div className={c.followButton}>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  unFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className={c.pagesContainer}>
        <div className={c.pages}>
          {slicedPages.map((p) => {
            return (
              <span
                className={props.currentPage === p && c.selectedPage}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
