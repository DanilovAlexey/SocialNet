import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleIsFollowingProgress } from '../../redux/usersReducer';
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)

            })
            .catch((error) => {
                console.log(error)
            })
            
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null} 
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingProgress={this.props.followingProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
})


export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleIsFollowingProgress})(UsersContainer);

