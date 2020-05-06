import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { addNewDialogActionCreator, updateNewDialogActionCreator } from '../../redux/dialogReducer'
import { Redirect } from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../common/FormControls/FormControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => (
    <form onSubmit = {props.handleSubmit}>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength10]}  />
        {/*<textarea id="myPost" rows="5" value={props.dialogsPage.newPostText} onChange={onChangeHandler} onFocus={props.onFocusHandler} />*/}
        <div>
            <button>Send</button>
        </div>
    </form>
)

const AddMessageFormRedux = reduxForm({form: "dialogAddMEssageForm"})(AddMessageForm)

export default (props) => {


    let addNewMessage = (values) => {
        //alert(values.newMessageBody);
        props.addNewDialog(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}