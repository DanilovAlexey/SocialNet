import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import { usersAPI } from '../../api/api'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    
    return (
        <div>
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p && classes.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                ))}
            </div>
            {
                props.users.map(u => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed === true
                                    ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, u.id)
                                        usersAPI.unfollowUser(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleIsFollowingProgress(false, u.id)
                                            })
                                    }

                                    }>UNFOLLOW</button>
                                    : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, u.id)
                                        usersAPI.followUser(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleIsFollowingProgress(false, u.id)
                                            })


                                    }
                                    }>FOLLOW</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}


export default Users