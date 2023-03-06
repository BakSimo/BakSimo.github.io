const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Jack" },
        { id: 2, name: "John" },
        { id: 3, name: "Max" },
        { id: 4, name: "Katy" },
        { id: 5, name: "Alex" },
    ],
    messages: [ 
        { id: 1, message: "Hello World!" },
        { id: 2, message: "Hi!" },
        { id: 3, message: "Hi guys" },
        { id: 4, message: "Wats up!" },
        { id: 5, message: "Created by Ko" },
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
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
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }  
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE });   
export const updateNewMessageBodyCreator = (body) => { 
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body,};
};

export default dialogsReducer;