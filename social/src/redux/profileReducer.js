import { ADD_POST, UPDATE_NEW_POST_TEXT } from './types'

const initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: "15" },
        { id: 2, message: 'Its my first post', likesCount: "20" },
    ],
    newPostText: "Print message..."
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }

            let newState = { ...state }
            newState.postsData = [...state.postsData]
            newState.postsData.push(newPost)

            newState.newPostText = ''
            return newState;
        }
        case UPDATE_NEW_POST_TEXT: {
            //state.newPostText = action.newPost
            let newState = { ...state }
            newState.newPostText = action.newPost
            return newState;
        }
        default:
            return state

    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })
