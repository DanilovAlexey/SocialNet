import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const User = ({user, followingProgress, unfollow, follow}) => {
    return (

                    <div>
                        <span>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed === true
                                    ? <button disabled={followingProgress.some(id => id === user.id)}
                                        onClick={() => { unfollow(user.id) }
                                        }>UNFOLLOW</button>
                                    : <button disabled={followingProgress.some(id => id === user.id)}
                                        onClick={() => { follow(user.id) }
                                        }>FOLLOW</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>               
    )
}


export default User