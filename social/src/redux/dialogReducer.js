import { ADD_NEW_DIALOG_ITEM, UPDATE_NEW_DIALOG_ITEM } from './types'


const initialState = {
    messagesData: [
        { message: "Hi", id: "1", direction: "to" },
        { message: "How're you?", id: "2", direction: "from" },
        { message: "Bye!", id: "3", direction: "from" },
        { message: "Yo", id: "4", direction: "to" },
        { message: "Rock", id: "5", direction: "from" }
    ],
    dialogsData: [
        { name: "Andrey", id: "1" },
        { name: "Boris", id: "2" },
        { name: "Stifler", id: "3" },
        { name: "John", id: "4" },
        { name: "Kevin", id: "5" }
    ],
    newPostText: "Print message..."
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_ITEM: {
            let newItem = {
                message: state.newPostText,
                id: "0",
                direction: "from"
            }

            let newState = {...state}
            newState.messagesData = [...state.messagesData]
            newState.messagesData.push(newItem)
            newState.newPostText = ''
            return newState;
        }
        case UPDATE_NEW_DIALOG_ITEM: {
            let newState = {...state}
            newState.newPostText = action.newDialog;
            return newState;
        }
        default:
            return state

    }
}


export const addNewDialogActionCreator = () => ({ type: ADD_NEW_DIALOG_ITEM })

export const updateNewDialogActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_ITEM, newDialog: text })
