import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/db_logo_colour.png'


const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav class="navbar navbar-dark bg-light fixed-top">
        <div class="container navbar-image">
          <a href='/'>
            <h1>Logo</h1>         
          </a>          
          <div className='nav '>
            <ul className='d-flex'>
              <Link to='/' reloadDocument><li className=''>Home</li></Link>
              <Link to='/About' reloadDocument><li className=''>About Us</li></Link>
              <Link to='/Services' reloadDocument><li className=''>Services</li></Link>
              <Link to='/DataBlog' reloadDocument><li className=''>DataBlog</li></Link>
              <Link to='/Contact' reloadDocument><li className=''>Contact Us</li></Link>				
            </ul>				
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default NavBar