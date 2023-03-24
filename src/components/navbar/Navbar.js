import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

function Navbar() {
  return (
    <div className="navbar">
        <ul className='nav__collection'>
          <li>
            <Link to={'/'}>
              <img src="https://support.activision.com/content/dam/atvi/support/common/header/atvilogo-wht.png" alt="" />
            </Link>
          </li>
          <li><Link to={'/games'}>games</Link></li>
          <li><Link to={'/services'}>ONline services</Link></li>
          <li><Link to={'/support'}>SUPPORT OPTIONS</Link></li>
          <li><Link to={'/case'}>My cases</Link></li>
        </ul>
        <div className="nav__search">
          <input type="text" placeholder='Search' />
          <button>
            <BiSearch />
          </button>
        </div>
    </div>
  )
}

export default Navbar