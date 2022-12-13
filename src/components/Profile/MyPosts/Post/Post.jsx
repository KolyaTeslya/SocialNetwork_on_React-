import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X1bnwLsxFXgAyBY00Kujl6PBKJ5t9fbVkg&usqp=CAU" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
