import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

const initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: "15" },
        { id: 2, message: 'Its my first post', likesCount: "20" },
    ],
    profile: null,
    status: ''
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        default:
            return state

    }
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfile = (userId) => async (dispatch) => {
    try {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }

    catch (error) {
        console.log(error)
    }
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))

    }
}

export const deletePost = (postId) => ({ type: DELETE_POST, postId })