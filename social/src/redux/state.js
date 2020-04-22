import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'
import {ADD_POST, UPDATE_NEW_POST_TEXT, ADD_NEW_DIALOG_ITEM, UPDATE_NEW_DIALOG_ITEM} from './types'


const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: "15" },
                { id: 2, message: 'Its my first post', likesCount: "20" },
            ],
            newPostText: "Print message..."
        },
        dialogsPage: {
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
        },
        sideBar: {
            links: [
                {
                    to: "profile",
                    text: "Profile"
                },
                {
                    to: "dialogs",
                    text: "Dialogs"
                },
                {
                    to: "news",
                    text: "News"
                },
                {
                    to: "music",
                    text: "Music"
                },
                {
                    to: "settings",
                    text: "Settings"
                }],
            friends: ["Andrey", "Boris", "Stifler", "John", "Kevin"]
        }
    },
    _subscriber() { },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer
    },




    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._subscriber(this._state)
    }


}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })

export const addNewDialogActionCreator = () => ({ type: ADD_NEW_DIALOG_ITEM})

export const updateNewDialogActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_ITEM, newDialog: text })

window.state = store.getState();

export default store
