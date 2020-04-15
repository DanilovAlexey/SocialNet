import React from 'react'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <React.Fragment>
      <PostForm />
      <Post message='Hi, how are you?' likes="15" />
      <Post message='Its my first post' likes="20" />
    </React.Fragment>
  )
}

export default MyPosts