import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue lighten-3">
      <div className="container">
        <ul className="right">
          <li><NavLink exact to="/">Game</NavLink></li>
          <li><NavLink to='/ranking'>Ranking</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar