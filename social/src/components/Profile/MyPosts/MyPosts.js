import React from 'react'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post'



const MyPosts = ({ state, dispatch }) => {
  return (
    <React.Fragment>
      <PostForm newPostText={state.newPostText} dispatch={dispatch} />

      {state.postsData.map((item, index) => (<Post key={index} message={item.message} likesCount={item.likesCount} />))}
    </React.Fragment>
  )
}

export default MyPosts