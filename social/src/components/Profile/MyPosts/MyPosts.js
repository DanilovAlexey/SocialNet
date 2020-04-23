import React from 'react'
import PostFormContainer from './PostForm/PostFormContainer'
import Post from './Post/Post'



const MyPosts = ({ store }) => {
  let state = store.getState()
  
  return (
    <React.Fragment>
      <PostFormContainer store={store} />

      {state.profilePage.postsData.map((item, index) => (<Post key={index} message={item.message} likesCount={item.likesCount} />))}
    </React.Fragment>
  )
}

export default MyPosts