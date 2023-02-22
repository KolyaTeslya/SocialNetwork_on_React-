import profileReducer, { addPostActionCreator } from "./profile-reducer";
import { ReactDOM } from "react-dom";
import React from "react";


it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("it-proger.com");
  let state = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 3, message: "Ok", likesCount: 14 },
      { id: 4, message: "It's cool", likesCount: 17 },
    ]
  };
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length) .toBe(5);
   expect(newState.posts[4].message) .toBe("it-proger.com");
});


