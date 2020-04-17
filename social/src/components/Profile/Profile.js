import React from 'react'
import classes from './Profile.module.css'
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'


const Profile = ({state, addPost, updateNewPost}) => {
  return (
    <React.Fragment>
      <div>
        <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" />
      </div>
      <Personal />
      <MyPosts state={state} addPost={addPost} updateNewPost={updateNewPost}  />
    </React.Fragment>
  )
}

export default Profile