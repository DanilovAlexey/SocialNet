import React from 'react'
import classes from './PostForm.module.css'

const PostForm = () => {
  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="myPost">My Post</label>
        <textarea id="myPost" rows="5" placeholder="print here..."></textarea>
      </div>
      <div style={{textAlign:"end"}}>
        <button>Send</button>
      </div>
    </div>
  )
}

export default PostForm