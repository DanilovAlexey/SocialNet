import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} 
            onPageChanged={onPageChanged} 
            totalItemsCount={totalUsersCount} 
            pageSize={pageSize}
            portionSize={10} />
            {
                users.map(u => <User user={u} 
                    followingProgress={props.followingProgress} 
                    key={u.id} 
                    follow={props.follow}
                    unfollow={props.unfollow}
                    />
                )
                    
            }
        </div>
    )
}


export default Users