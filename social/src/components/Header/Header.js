import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
        <div><img src="https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Philadelphia_Eagles_primary_logo.png/800px-Philadelphia_Eagles_primary_logo.png" /></div>
        <div>title</div>
        <div>logout</div>
      </header>
    )
}

export default Header