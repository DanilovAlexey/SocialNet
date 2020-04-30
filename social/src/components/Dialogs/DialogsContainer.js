import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { addNewDialogActionCreator, updateNewDialogActionCreator } from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
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






export default
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs)