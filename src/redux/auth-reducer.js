const SET_USER_DATA = 'SET_USER_DATA';

let initialSate = {
  id: null,
  email: null,
  login: null
};

const authReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    
    
    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} });


export default authReducer;
