import React from 'react'
import classes from './PostForm.module.css'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/profileReducer'
import PostForm from './PostForm'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPostAction: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPost: (text) => {      
      dispatch(updateNewPostActionCreator(text))
    },
    onFocusHandler: () => {
      dispatch(updateNewPostActionCreator(''))
    }
  }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)


export default PostFormContainer