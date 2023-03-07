const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

let initialState = {
    users: [],
    pageSize: 5, 
    totalUsersCount: 20,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }) 
            }
        case SET_USERS:
            return { 
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId });   
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;