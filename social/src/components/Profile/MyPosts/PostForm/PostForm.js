import React from 'react'
import classes from './PostForm.module.css'

const PostForm = ({newPostText, dispatch}) => {
  let postRefValue = React.createRef()

  let onClickHandler = () => {
    postRefValue.current.value = newPostText 
    dispatch({type:'ADD-POST'})
  }
  
  let onChangeHandler = () => {
    let text = postRefValue.current.value
    //store.updateNewPost(text)
    dispatch({type:'UPDATE-NEW-POST-TEXT', newPost: text})
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