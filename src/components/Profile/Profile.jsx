import React from "react";
import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://cdn-img1.imgworlds.com/assets/a8f48ba2-9603-4e2b-ac2d-60ce06efa566.jpg?key=home-gallery"></img>
      </div>
      <div className={classes.photo}>
        <img src="https://www.imgacademy.com/sites/default/files/img-academy-boarding-school-worlds-most-dedicated.jpg"></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
