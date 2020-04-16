import React from 'react'
import classes from './PostForm.module.css'

const PostForm = () => {

  let postRefValue = React.createRef()

  let onClickHandler = () => {
    let text = postRefValue.current.value
    alert(text);
  }

  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <textarea id="myPost" rows="5" placeholder="print here..." ref={postRefValue}></textarea>
      </div>
      <div style={{textAlign:"end"}}>
        <button onClick={onClickHandler}>Send</button>
      </div>
    </div>
  )
}

export default PostForm