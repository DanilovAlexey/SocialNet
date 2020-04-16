import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'


let dialogsData = [
    { name: "Andrey", id: "1" },
    { name: "Boris", id: "2" },
    { name: "Stifler", id: "3" },
    { name: "John", id: "4" },
    { name: "Kevin", id: "5" }
]

let messagesData = [
    { message: "Hi", id: "1" },
    { message: "How're you?", id: "2" },
    { message: "Bye!", id: "3" },
    { message: "Yo", id: "4" },
    { message: "Rock", id: "5" }
]



export default (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map((item, index) => (<DialogItem name={item.name} id={item.id} key={index} />))}
            </div>
            <div className={classes.messages}>
                {messagesData.map((item, index) => (<MessageItem message={item.message} id={item.id} key={index} />))}
            </div>
        </div>
    )
}