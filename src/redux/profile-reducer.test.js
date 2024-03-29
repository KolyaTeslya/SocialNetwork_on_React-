import React from "react";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import { ReactDOM } from "react-dom";


let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Ok", likesCount: 14 },
    { id: 4, message: "It's cool", likesCount: 17 }
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("it-proger.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length) .toBe(5);
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("it-proger.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts[4].message) .toBe("it-proger.com");
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length) .toBe(3);
});

it(`after deleting length should'nt be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length) .toBe(4);
});
