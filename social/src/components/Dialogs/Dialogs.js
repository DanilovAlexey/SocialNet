import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'


export default ({state}) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {state.dialogsData.map((item, index) => (<DialogItem name={item.name} id={item.id} key={index} />))}
            </div>
            <div className={classes.messages}>
                {state.messagesData.map((item, index) => (<MessageItem message={item.message} id={item.id} key={index} direction={item.direction} />))}
            </div>
        </div>
    )
}