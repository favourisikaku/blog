import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/db_logo_colour.png'


const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav class="navbar navbar-light bg-light fixed-top">
        <div class="container">
          <a href='/'>
            <h2 className='nav-header'>Logo</h2>
          </a>          
          <div className='nav-text'>
            <ul className='nav-text-middle'>
              <li><a href='/'>Home</a></li>
              <li><a href='/About'>About Us</a></li>
              <li><a href='/Services'>Services</a></li>
              <li><a href='/DataBlog'>DataBlog</a></li>
              <li><a href='/Contact'>Contact Us</a></li>					
            </ul>				
          </div>
          <button class="navbar-toggler bg-light nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link"  href="/About">About Us</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="/Services">Services</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="/DataBlog">DataBlog</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a class="nav-link" href="/Contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar