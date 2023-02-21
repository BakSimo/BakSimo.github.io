import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello World!", likeCount: 17 },
            { id: 2, message: "Hi, how are you!", likeCount: 32 },
        ],
        newPostText: "Hello World!",
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state); 
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state); 
}

export default state;