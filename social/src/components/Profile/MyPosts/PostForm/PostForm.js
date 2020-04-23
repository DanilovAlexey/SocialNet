import React from 'react'
import classes from './PostForm.module.css'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/profileReducer'

const PostForm = (props) => {

  let onChangeHandler = (e) => {
    let text = e.target.value
    //store.updateNewPost(text)

    props.updateNewPost(text)
  }



  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <textarea id="myPost" rows="5" onChange={onChangeHandler} value={props.newPostText} onFocus={props.onFocusHandler}></textarea>
      </div>
      <div style={{ textAlign: "end" }}>
        <button onClick={props.addPostAction}>Send</button>
      </div>
    </div>
  )
}

export default PostForm