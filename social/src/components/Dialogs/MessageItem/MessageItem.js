import React from 'react'
import classes from '../Dialogs.module.css'


export default props => {
    let cls = [classes.message]
    
    if (props.direction === 'from') {
        cls.push(classes.right)
    }

    return (
        <div className={cls.join(' ')}>
            {props.message}
        </div>
    )
}
