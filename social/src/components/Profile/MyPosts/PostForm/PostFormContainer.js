import React from 'react'
import classes from './PostForm.module.css'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/profileReducer'
import PostForm from './PostForm'

const PostFormContainer = ({ store }) => {

  let state = store.getState()

  let addPostAction = () => {
    store.dispatch(addPostActionCreator())
  }

  let updateNewPost = (text) => {
    store.dispatch(updateNewPostActionCreator(text))
  }

  const onFocusHandler = () => {
    store.dispatch(updateNewPostActionCreator(''))
  }

  return (
    <PostForm newPostText={state.profilePage.newPostText} addPostAction={addPostAction} updateNewPost={updateNewPost} onFocusHandler={onFocusHandler} />
  )
}

export default PostFormContainer