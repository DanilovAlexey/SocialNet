import React from 'react'
import Header from './Header'
import { authAPI } from '../../api/api'
import { connect } from 'react-redux'
import { authenticate } from '../../redux/authReducer'


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authenticate()
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

export default connect(mapStateToProps, { authenticate })(HeaderContainer)