import React from 'react'
import classes from './Profile.module.css'
import Personal from './Personal/Personal'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" />
      </div>
      <Personal />
      <MyPosts />
    </div>
  )
}

export default Profile