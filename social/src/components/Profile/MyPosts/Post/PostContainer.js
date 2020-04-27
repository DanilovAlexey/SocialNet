import React from 'react'
import classes from './Post.module.css'
import { connect } from 'react-redux'
import Post from './Post'


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const PostList = (props) => {
  return (
    props.profilePage.postsData.map((item, index) => (
      <Post key={index} message={item.message} likesCount={item.likesCount} />
    ))
  )

}

const PostContainer = connect(mapStateToProps, null)(PostList)

export default PostContainer