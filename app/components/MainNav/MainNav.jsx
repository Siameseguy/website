import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

import Home from '../Home/Home'
import About from '../About/About'
import Blog from '../Blog/Blog'
import ContactForm from '../Contact/ContactForm'

const MainNav = () => {
  return (
    <div>
      <Menu>
        <Menu.Item
          name="home"
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item
          name="about"
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item
          name="blog"
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <NavLink to="/blog">Blog</NavLink>
        </Menu.Item>
        <Menu.Item
          name="blog"
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="logout" />
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default MainNav
