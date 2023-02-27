import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hello World!", likeCount: 17 },
                { id: 2, message: "Hi, how are you!", likeCount: 32 },
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber(){},
    getState(){
        return this._state;
    },
    subscribe(observer){this._callSubscriber = observer;},
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }  
}

export default store;
window.store = store;