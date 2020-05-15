import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../common/FormControls/FormControls'



const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return <form onSubmit={handleSubmit}>
        <div style={{ paddingTop: "20px" }}><b>Full Name:</b>{createField("Full name", "fullName", [], Input)}</div>

        <div><b>Looking for a Job:</b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
        <div>My skills:{createField("Skills", "lookingForAJobDescription", [], Textarea)}</div>
        <div><b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}</div>

        <div>
            <div><h4>Контакты</h4></div>
            <div>
                {Object.keys(profile.contacts).map((key, index) => {
                    return <div>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </div>
        <div><button>Save</button></div>
        {error && <div>
            {error}
        </div>
        }
    </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'profileEdit' })(ProfileDataForm)

export default ProfileDataReduxForm