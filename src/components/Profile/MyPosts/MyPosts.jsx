import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" />
        <Post message="It's my first post!" />
        <Post message="Cool!!!)))" />
      </div>
    </div>
  );
};

export default MyPosts;
