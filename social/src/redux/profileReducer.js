import { usersAPI, profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO = 'SAVE_PHOTO'

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
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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


export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos })
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))

    }
}



export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("profileEdit", { _error: response.data.messages[0] }))
        //dispatch(stopSubmit("profileEdit", {contacts: { "facebook": response.data.messages[0]} })) // тогда ошибка будет у поля
        return Promise.reject(response.data.messages[0])
    }
}