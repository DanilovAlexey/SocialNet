import React, { useState } from 'react'
import classes from './Personal.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusHooks from './ProfileStatusHooks'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './PersonalDataForm'

const Personal = (props) => {
  //console.log(props)


  const [editMode, setEditMode] = useState(false)

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader />
  }

  const onSubmit = (formData) => {
    // async thunk всегда возвращает промис
    props.saveProfile(formData).then(() => {setEditMode(false)})
    
    
  }

  return (
    <div className={classes.personal}>
      <div>
        <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
        {props.isOwner && <input type={"file"} onChange={onAvatarSelected} />}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: "20px" }}>
        <div><h2>{props.profile.fullName}</h2></div>
        <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />

        {editMode
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData profile={props.profile} isOwner={props.isOwner} setEditModeTrue={() => { setEditMode(true) }} />}

      </div>
    </div>
  )
}



const ProfileData = ({ profile, isOwner, setEditModeTrue }) => (
  <>
    <div style={{ paddingTop: "20px" }}><b>Looking for a Job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
    {profile.lookingForAJob &&
      <div>My skills:{profile.lookingForAJobDescription}</div>
    }

    <div>
      <div><b>About me:</b> {profile.aboutMe ? profile.aboutMe : "no"}</div>
    </div>
    <div>
      <div><h4>Контакты</h4></div>
      {/*<ul>
            { Object.keys(props.profile.contacts).map((key, index) => (
              <li key={index}>{key}: {props.profile.contacts[key]}</li>
            )) }
            </ul>*/}
      <div>
        {Object.keys(profile.contacts).map((key, index) => (
          <Contact key={index} contactKey={key} contactValue={profile.contacts[key]} />
        ))}
      </div>
    </div>
    {isOwner && <div><button onClick={setEditModeTrue}>Edit</button></div>}
  </>
)

const Contact = ({ contactKey, contactValue }) => {
  return <div><b>{contactKey}</b>: {contactValue}</div>
}

export default Personal