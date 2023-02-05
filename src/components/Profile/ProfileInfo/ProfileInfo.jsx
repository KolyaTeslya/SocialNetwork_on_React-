import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
        {/* <div>
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/8-sunset-over-water-focusstock.jpg" />
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <ProfileStatus status={props.status}/>
        </div>  
      </div>
  );
};

export default ProfileInfo;
