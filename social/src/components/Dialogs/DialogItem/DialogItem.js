import React from 'react'
import classes from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


export default (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}