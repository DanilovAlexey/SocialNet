import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => ({
    users: state.usersPage.users
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);

