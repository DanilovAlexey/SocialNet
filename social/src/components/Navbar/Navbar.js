import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'

const Navbar = ({ state }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {state.links.map((link, index) => (<li key={index}><NavLink to={`/${link.to}`} activeClassName={classes.active}>{link.text}</NavLink></li>))}
      </ul>
      <Friends friends={state.friends} />
    </nav>
  )
}

export default Navbar