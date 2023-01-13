const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialSate = {
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
    newMessageBody: ""
  };

const dialogsReducer = (state = initialSate, action) => {

  switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return { 
            ...state,
            newMessageBody: action.body
          }
        case SEND_MESSAGE:
          let body = state.newMessageBody;
          return { 
            ...state, 
            newMessageBody: '',
            messages: [...state.messages, { id: 5, message: body }]
          };
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;
