import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, createField } from '../../components/common/FormControls/FormControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import styles from '../common/FormControls/FormsControl.module.css'


const LoginForm = ({ handleSubmit, error, captchaUrl }) => (
    <form onSubmit={handleSubmit}>

        {createField("email", "email", [required], Input)}
        {createField("password", "password", [required], Input, { type: "password" })}
        {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}, )}

        {error && <div className={styles.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
)

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        //console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm  onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>)
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl:  state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)