let rerenderEntireTree = () => {
  console.log('State changed');
}

let state = {
    profilePage : {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
            { id: 3, message: "Ok", likesCount: 14 },
            { id: 4, message: "It's cool", likesCount: 17 },
          ],
        newPostText: 'it-proger' 
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
          ]
    },
    sidebar : {}

}

window.state = state;

export let addPost = () => {
  let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
