import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { addNewDialogActionCreator, updateNewDialogActionCreator } from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
}
)

let mapDispatchToProps = (dispatch) => ({
    addNewDialog: () => {
        dispatch(addNewDialogActionCreator())
    },

    updateNewDialog: (text) => {
        dispatch(updateNewDialogActionCreator(text))
    },

    onFocusHandler: () => {
        dispatch(updateNewDialogActionCreator(''))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs) 