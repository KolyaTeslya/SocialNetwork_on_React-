import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/8-sunset-over-water-focusstock.jpg" />
        </div>
        <div>
          ava + description 
        </div>
        <MyPosts />
      </div>
  );
};

export default Profile;
