import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Input} from '../../components/common/FormControls/FormControls'
import {required} from '../../utils/validators/validators'

const LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input}  validate={[required]} />
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
)

const LoginReduxForm = reduxForm({

    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>)
}

export default Login