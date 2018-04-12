import React from 'react'
import { NavLink } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Blog from '../Blog/Blog'

const MainNav = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  )
}

export default MainNav
