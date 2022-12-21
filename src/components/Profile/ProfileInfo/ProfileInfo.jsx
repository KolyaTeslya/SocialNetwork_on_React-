import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  return (
    <div>
        <div>
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/8-sunset-over-water-focusstock.jpg" />
        </div>
        <div className={s.descriptionBlock}>
          ava + description 
        </div>
      </div>
  );
};

export default ProfileInfo;
