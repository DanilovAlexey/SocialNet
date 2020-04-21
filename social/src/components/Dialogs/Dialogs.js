import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {addNewDialogActionCreator, updateNewDialogActionCreator} from '../../redux/state'


export default ({state, dispatch}) => {

    const onClickHandler = () => {        
        dispatch(addNewDialogActionCreator())
    }

    const onChangeHandler = (e) => {     
        let text = e.target.value

        dispatch(updateNewDialogActionCreator(text))
    }

    const onFocusHandler = () => {
        dispatch(updateNewDialogActionCreator(''))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {state.dialogsData.map((item, index) => (<DialogItem name={item.name} id={item.id} key={index} />))}
            </div>
            <div className={classes.messages}>
                {state.messagesData.map((item, index) => (<MessageItem message={item.message} id={item.id} key={index} direction={item.direction} />))}
            </div>
            <div className={classes.messageForm}>
                <label htmlFor="myPost">My Post</label>
                <textarea id="myPost" rows="5" value={state.newPostText} onChange={onChangeHandler} onFocus={onFocusHandler}/>
                <div>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    )
}