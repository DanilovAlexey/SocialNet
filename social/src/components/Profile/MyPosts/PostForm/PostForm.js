import React from 'react'
import classes from './PostForm.module.css'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/profileReducer'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormControls/FormControls'

const maxLength10 = maxLengthCreator(10)

const ProfilePostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <Field component={Textarea} id="myPost" name="myPost" rows="5" validate={[required, maxLength10]} placeholder="Print message" />
      </div>
      <div style={{ textAlign: "end" }}>
        <button>Send</button>
      </div>
    </form>
  )
}

const ProfilePostFormRedux = reduxForm({ form: "profileAddMessageForm" })(ProfilePostForm)


export default (props) => {

  let addNewPost = (values) => {
    //alert(values.newMessageBody);
    props.addPostAction(values.myPost)
  }

  return <ProfilePostFormRedux onSubmit={addNewPost} />

}