import React from "react";
import c from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../Assets/img/stock-avatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let curP = this.props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 4;
    let slicedPages = pages.slice(curPF, curPL);

    return (
      <div className={c.users}>
        <div className={c.pages}>
          {slicedPages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && c.selectedPage}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div className={c.userInfo} key={u.id}>
            <div className={c.photoBlock}>
              <div className={c.userPhoto}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
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
                      this.props.unFollow(u.id);
                    }}
                  >
                    unFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
