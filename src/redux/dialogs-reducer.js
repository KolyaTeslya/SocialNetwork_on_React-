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
    ]
  };

const dialogsReducer = (state = initialSate, action) => {

  switch (action.type) {
        case SEND_MESSAGE:
          let body = action.newMessageBody;
          return { 
            ...state, 
            messages: [...state.messages, { id: 5, message: body }]
          };
        default: 
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });



export default dialogsReducer;
