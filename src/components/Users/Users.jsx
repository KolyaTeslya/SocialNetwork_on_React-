import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "http://www.rewizor.ru/files/238346ks54.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "I am a boss",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl: "http://www.rewizor.ru/files/238346ks54.jpg",
        followed: true,
        fullName: "Sasha",
        status: "I am a boss too",
        location: { city: "Rom", country: "Italy" },
      },
      {
        id: 3,
        photoUrl: "http://www.rewizor.ru/files/238346ks54.jpg",
        followed: false,
        fullName: "Rachel",
        status: "I am a boss too",
        location: { city: "Berlin", country: "Germany" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
