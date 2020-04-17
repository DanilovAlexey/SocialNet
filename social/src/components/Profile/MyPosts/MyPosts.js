import React from 'react'
import PostForm from './PostForm/PostForm'
import Post from './Post/Post'



const MyPosts = ({ state, store }) => {
  return (
    <React.Fragment>
      <PostForm newPostText={state.newPostText} store={store} />

      {state.postsData.map((item, index) => (<Post key={index} message={item.message} likesCount={item.likesCount} />))}
    </React.Fragment>
  )
}

export default MyPosts