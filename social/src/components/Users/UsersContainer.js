import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsersAll, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress, getUsersAllSuperSelector } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {


    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);

    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber);
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
    users: getUsersAll(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
})


export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage,
            toggleIsFollowingProgress, getUsers
        }),
        withAuthRedirect
    )(UsersContainer)

