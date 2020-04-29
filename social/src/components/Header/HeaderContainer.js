import React from 'react'
import Header from './Header'
import { authAPI } from '../../api/api'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/authReducer'


class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.authRequest()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }

      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (<Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)