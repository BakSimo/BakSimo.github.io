const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
            ]
        }
    },
    _callSubscriber(){},
    _addPost(){
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state); 
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state); 
    },
    getState(){
        return this._state;
    },
    subscribe(observer){this._callSubscriber = observer;},
    dispatch(action){
        if (action.type === "ADD-POST") {
            this._addPost();     
        }
        else if(action.type === "UPDATE-NEW-POST-TEXT"){
            this._updateNewPostText(action.newText);
        }
    }  
}

export const addPostAC = () => ({type: ADD_POST }); 
export  const updateNewPostTextAC = (text) => { 
    return { type: UPDATE_NEW_POST_TEXT, newText: text,};
};

export default store;
window.store = store;