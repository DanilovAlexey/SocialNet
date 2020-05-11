import React from 'react'
import classes from './Personal.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusHooks from './ProfileStatusHooks'

const Personal = (props) => {
  //console.log(props)
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={classes.personal}>
      <div>
        <img src={props.profile.photos.small} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: "20px" }}>
        <div><h2>{props.profile.fullName}</h2></div>        
        <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
        <div><p>{props.profile.aboutMe}</p></div>
        <div>
          <div><h4>Контакты</h4></div>
          <ul>
            { Object.keys(props.profile.contacts).map((key, index) => (
              <li key={index}>{key}: {props.profile.contacts[key]}</li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Personal