import React from "react";
import classes from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"></img>
      {props.message}
      <div>
        <span>Like: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
