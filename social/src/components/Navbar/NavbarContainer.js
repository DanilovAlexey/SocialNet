import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import Navbar from './Navbar'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar
  }
}


const NavBarContainer = connect(mapStateToProps, null)(Navbar)
export default NavBarContainer;