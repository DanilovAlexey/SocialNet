import { usersAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: "15" },
        { id: 2, message: 'Its my first post', likesCount: "20" },
    ],
    newPostText: "Print message...",
    profile: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText : ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, 
                newPostText : action.newPost
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile
            }

        default:
            return state

    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(data => {        
            dispatch(setUserProfile(data))
  
        })
        .catch((error) => {
          console.log(error)
        })
    }
}