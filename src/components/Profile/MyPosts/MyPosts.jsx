import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post!", likesCount: 25 },
    { id: 3, message: "Cool!!!)))", likesCount: 26 },
  ];

  let postsElements = postsData.map((post) => (
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
