import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.post.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div>
      My posts
      <div>New post</div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
