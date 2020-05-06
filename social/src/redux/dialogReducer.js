import { ADD_NEW_DIALOG_ITEM } from './types'


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
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_ITEM:
            let newItem = {
                message: action.newMessageBody,
                id: "0",
                direction: "from"
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newItem]
            };
        default:
            return state

    }
}


export const addNewDialogActionCreator = (newMessageBody) => ({ type: ADD_NEW_DIALOG_ITEM, newMessageBody})

