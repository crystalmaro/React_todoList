import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue lighten-3">
        <ul>
          <li><NavLink exact to="/">Game</NavLink></li>
          <li><NavLink to='/ranking'>Ranking</NavLink></li>
          <li><NavLink to='/try1'>Try1</NavLink></li>
          <li><NavLink to='/try2'>Try2</NavLink></li>
        </ul>
    </nav> 
  )
}
export default Navbar