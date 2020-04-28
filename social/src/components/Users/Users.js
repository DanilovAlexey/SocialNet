import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'


class User extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => (
                        <span className={this.props.currentPage === p && classes.selectedPage}
                            onClick={(e) => { this.onPageChanged(p); }}>{p}</span>
                    ))}
                </div>
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