import React from 'react'
import classes from './Profile.module.css'
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: "15" },
  { id: 2, message: 'Its my first post', likesCount: "20" },
]

const Profile = () => {
  return (
    <React.Fragment>
      <div>
        <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" />
      </div>
      <Personal />
      <MyPosts postsData={postsData} />
    </React.Fragment>
  )
}

export default Profile