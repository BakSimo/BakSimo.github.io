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
    getState(){
        return this._state;
    },
    _callSubscriber(){},
    addPost(){
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state); 
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state); 
    },
    subscribe(observer){this._callSubscriber = observer;}
}

export default store;
window.state = store;