import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile } from '../../redux/profileReducer'
import * as axios from 'axios'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 7622      
    } 

    this.props.getProfile(userId)
  }


  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile
  }
)

let withUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfile })(withUrlDataContainer)