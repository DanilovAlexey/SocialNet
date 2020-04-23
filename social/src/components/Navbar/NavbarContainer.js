import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import Navbar from './Navbar'

const NavbarContainer = ({ store }) => {

  const state = store.getState()

  return  <Navbar sideBar={state.sideBar} />
}

export default NavbarContainer