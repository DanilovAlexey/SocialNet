import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div><img src="https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Philadelphia_Eagles_primary_logo.png/800px-Philadelphia_Eagles_primary_logo.png" /></div>
      <div>title</div>
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header