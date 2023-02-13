import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialSate = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: 
  {userId, email, login, isAuth} });
export const getAuthUserData = () => (dispatch) => { 
  authAPI.me()
  .then((response) => {
    if(response.data.resultCode ===0 ) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true)); 
    }
  });
}

export const login = (email, password, rememberMe) => (dispatch) => { 
  // let action = stopSubmit("login", {password: "Email is wrong"});
  // dispatch(action); 
  // return;
  authAPI.login(email, password, rememberMe)
  .then((response) => {
    if(response.data.resultCode === 0 ) {
       dispatch(getAuthUserData())
    } else {

    }
  });
} 

export const logout = () => (dispatch) => { 
  authAPI.logout()
  .then((response) => {
    if(response.data.resultCode === 0 ) {
       dispatch(setAuthUserData(null, null, null, false))
    }
  });
} 

export default authReducer;
