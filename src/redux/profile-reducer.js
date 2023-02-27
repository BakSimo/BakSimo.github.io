const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hello World!", likeCount: 17 },
        { id: 2, message: "Hi, how are you!", likeCount: 32 },
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
} 


export const addPostAC = () => ({type: ADD_POST });   
export  const updateNewPostTextAC = (text) => { 
    return { type: UPDATE_NEW_POST_TEXT, newText: text,};
};

export default profileReducer;