import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Header.css'


export class Header extends React.Component {
  render() {
    return (
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">Best Times</a>
          <a id="about" className="menu-item" href="/about">Your Profile</a>
          <a id="contact" className="menu-item" href="/contact">Contact US</a>
        </Menu>
      </div>
    )
  }
}