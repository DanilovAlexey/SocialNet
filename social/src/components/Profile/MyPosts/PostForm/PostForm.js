import React from 'react'
import classes from './PostForm.module.css'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/profileReducer'
import { reduxForm, Field } from 'redux-form'

const ProfilePostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <Field component="textarea" id="myPost" name="myPost" rows="5" />
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