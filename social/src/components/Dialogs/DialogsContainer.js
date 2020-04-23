import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {addNewDialogActionCreator, updateNewDialogActionCreator} from '../../redux/dialogReducer'
import Dialogs from './Dialogs'


export default ({store}) => {

    let state = store.getState()

    const addNewDialog = () => {        
        store.dispatch(addNewDialogActionCreator())
    }

    const updateNewDialog = (text) => {     
         store.dispatch(updateNewDialogActionCreator(text))
    }

    const onFocusHandler = () => {
        store.dispatch(updateNewDialogActionCreator(''))
    }

    return (
        <Dialogs dialogsPage={state.dialogsPage} addNewDialog={addNewDialog} updateNewDialog={updateNewDialog} onFocusHandler={onFocusHandler}/>
    )
}