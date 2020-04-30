import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { addNewDialogActionCreator, updateNewDialogActionCreator } from '../../redux/dialogReducer'
import { Redirect } from 'react-router-dom'

export default (props) => {


    const onChangeHandler = (e) => {
        let text = e.target.value

        props.updateNewDialog(text)
    }


    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogsData.map((item, index) => (<DialogItem name={item.name} id={item.id} key={index} />))}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messagesData.map((item, index) => (<MessageItem message={item.message} id={item.id} key={index} direction={item.direction} />))}
            </div>
            <div className={classes.messageForm}>
                <label htmlFor="myPost">My Post</label>
                <textarea id="myPost" rows="5" value={props.dialogsPage.newPostText} onChange={onChangeHandler} onFocus={props.onFocusHandler} />
                <div>
                    <button onClick={props.addNewDialog}>Send</button>
                </div>
            </div>
        </div>
    )
}