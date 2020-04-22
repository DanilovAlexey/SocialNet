import {ADD_POST, UPDATE_NEW_POST_TEXT} from './types'

export default (state, action) => {  
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
    
            state.postsData.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPost
            return state;
        default:
            return state

    }
}