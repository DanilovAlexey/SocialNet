import {ADD_NEW_DIALOG_ITEM, UPDATE_NEW_DIALOG_ITEM} from './types'

export default (state, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_ITEM:
            let newItem = {
                message: state.newPostText,
                id: "0",
                direction: "from"
            }
            state.messagesData.push(newItem)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_DIALOG_ITEM:
            state.newPostText = action.newDialog;
            return state;
        default:
            return state

    }
}