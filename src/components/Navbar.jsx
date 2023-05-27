import React from 'react'
import { routes } from '../routes'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
      <nav className='nav'>
        <div className="logo-block">
          Cosmo interiors
        </div>
        <div className="nav-menu"></div>
        {/* <div className='nav-block'>
          {routes.map(({path, name}) => 
            name && <NavLink key={path} to={path}>{name}</NavLink>
          )}
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar