import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
    setUsersTotalCount: (totalUsersCount) => {dispatch(setUsersTotalCountAC(totalUsersCount))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);

