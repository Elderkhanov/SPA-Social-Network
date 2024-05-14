import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likesCount="23" />
        <Post message="It's my first post!" likesCount="25" />
        <Post message="Cool!!!)))" likesCount="26" />
      </div>
    </div>
  );
};

export default MyPosts;
