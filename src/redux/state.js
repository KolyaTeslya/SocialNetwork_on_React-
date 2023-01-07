let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Ok", likesCount: 14 },
        { id: 4, message: "It's cool", likesCount: 17 },
      ],
      newPostText: "it-proger",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Kolya" },
        { id: 2, name: "Vadym" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Dima" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
    },
    sidebar: {},
  },
  _callSubscriber()  {
    console.log("State changed");
  },

  getState(){
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },


  dispatch(action){ //  { type: 'ADD-POST' }
    if (action.type === 'ADD-POST') {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  }
  }

};



export default store;

window.store = store;
