import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage, toggleIsFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
            
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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



export default withAuthRedirect(connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, 
     toggleIsFollowingProgress, getUsers})(UsersContainer));

