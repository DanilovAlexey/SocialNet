import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'

const Navbar = ({ sideBar }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {sideBar.links.map((link, index) => (<li key={index}><NavLink to={`/${link.to}`} activeClassName={classes.active}>{link.text}</NavLink></li>))}
      </ul>
      <Friends friends={sideBar.friends} />
    </nav>
  )
}

export default Navbar