import React from 'react'
import PostFormContainer from './PostForm/PostFormContainer'
import PostContainer from './Post/PostContainer'



const MyPosts = (props) => {
  return (
    <React.Fragment>
      <PostFormContainer />
      <PostContainer/>
    </React.Fragment>
  )
}

export default MyPosts