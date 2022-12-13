import React from "react";
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
        <div>
          My posts
          <div>
            New post 
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className="item">
              post 2
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
