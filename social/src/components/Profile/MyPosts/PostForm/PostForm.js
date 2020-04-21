import React from 'react'
import classes from './PostForm.module.css'
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/state'

const PostForm = ({newPostText, dispatch}) => {
  

  let onClickHandler = () => { 
    dispatch(addPostActionCreator())
  }
  
  let onChangeHandler = (e) => {
    let text = e.target.value
    //store.updateNewPost(text)

    dispatch(updateNewPostActionCreator(text))
  }

  const onFocusHandler = () => {
    dispatch(updateNewPostActionCreator(''))
}

  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <textarea id="myPost" rows="5" onChange={onChangeHandler} value={newPostText} onFocus={onFocusHandler}></textarea>
      </div>
      <div style={{textAlign:"end"}}>
        <button onClick={onClickHandler}>Send</button>
      </div>
    </div>
  )
}

export default PostForm