import React from 'react'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post'



const MyPosts = ({ postsData }) => {
  return (
    <React.Fragment>
      <PostForm />

      {postsData.map((item, index) => (<Post key={index} message={item.message} likesCount={item.likesCount} />))}
    </React.Fragment>
  )
}

export default MyPosts