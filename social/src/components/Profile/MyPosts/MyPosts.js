import React from 'react'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post'



const MyPosts = ({ state, addPost, updateNewPost }) => {
  return (
    <React.Fragment>
      <PostForm newPostText={state.newPostText} addPost={addPost} updateNewPost={updateNewPost} />

      {state.postsData.map((item, index) => (<Post key={index} message={item.message} likesCount={item.likesCount} />))}
    </React.Fragment>
  )
}

export default MyPosts