import React from 'react'
import classes from './PostForm.module.css'
import { addPostActionCreator } from '../../../../redux/profileReducer'
import PostForm from './PostForm'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPostAction: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)


export default PostFormContainer