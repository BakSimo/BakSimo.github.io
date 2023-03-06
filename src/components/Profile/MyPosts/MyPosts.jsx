import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} key={p.id}/>
  ));

  let onAddPost = () => {
    if (props.newPostText.length > 0) {
      props.addPost();
    }
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={c.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            placeholder="Enter your text"
            rows="3"
            cols="40"
            maxLength="100"
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
