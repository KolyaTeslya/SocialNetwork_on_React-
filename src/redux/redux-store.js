import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; 

export default store;