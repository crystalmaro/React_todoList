import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue lighten-3">
        <ul>
          <li><NavLink exact to="/">Game</NavLink></li>
          <li><NavLink to='/ranking'>Ranking</NavLink></li>
          <li><NavLink to='/Sliding'>Sliding</NavLink></li>
          <li><NavLink to='/Kitty'>Kitty</NavLink></li>
        </ul>
    </nav> 
  )
}
export default Navbar