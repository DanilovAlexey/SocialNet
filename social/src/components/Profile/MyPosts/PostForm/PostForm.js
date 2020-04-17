import React from 'react'
import classes from './PostForm.module.css'

const PostForm = ({newPostText, addPost, updateNewPost}) => {
  let postRefValue = React.createRef()

  let onClickHandler = () => {
    postRefValue.current.value = newPostText 
    addPost()    
  }
  
  let onChangeHandler = () => {
    let text = postRefValue.current.value
    updateNewPost(text)
  }

  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <textarea id="myPost" rows="5" ref={postRefValue} onChange={onChangeHandler} value={newPostText}></textarea>
      </div>
      <div style={{textAlign:"end"}}>
        <button onClick={onClickHandler}>Send</button>
      </div>
    </div>
  )
}

export default PostForm