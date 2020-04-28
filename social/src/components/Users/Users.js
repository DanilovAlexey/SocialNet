import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'


class User extends React.Component {

    constructor(props) {
        super(props);        
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto} />
                                </div>
                                <div>
                                    {u.followed === true
                                        ? <button onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</button>
                                        : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>
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
}

export default User