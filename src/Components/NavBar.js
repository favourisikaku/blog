import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='nav-container'>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container">
          <Link to='/'>
            <h2 className='nav-header'>Logo</h2>
          </Link>
          <div className='nav-text'>
            <ul className='nav-text-middle'>
              <li className={pathname === '/' ? 'active' : ''}><Link reloadDocument to='/'>Home</Link></li>
              <li className={pathname === '/About' ? 'active' : ''}><Link reloadDocument to='/About'>About Us</Link></li>
              <li className={pathname === '/Services' ? 'active' : ''}><Link reloadDocument to='/Services'>Services</Link></li>
              <li className={pathname === '/DataBlog' ? 'active' : ''}><Link reloadDocument to='/DataBlog'>360Blog</Link></li>
              <li className={pathname === '/Contact' ? 'active' : ''}><Link  reloadDocument to='/Contact'>Contact Us</Link></li>
            </ul>
          </div>
          <button className="navbar-toggler bg-light nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className={`nav-item ${pathname === '/' ? 'active' : ''}`} data-bs-dismiss="offcanvas">
                  <Link  reloadDocument className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className={`nav-item ${pathname === '/About' ? 'active' : ''}`} data-bs-dismiss="offcanvas">
                  <Link reloadDocument  className="nav-link" to="/About">About Us</Link>
                </li>
                <li className={`nav-item ${pathname === '/Services' ? 'active' : ''}`} data-bs-dismiss="offcanvas">
                  <Link  reloadDocument className="nav-link" to="/Services">Services</Link>
                </li>
                <li className={`nav-item ${pathname === '/DataBlog' ? 'active' : ''}`} data-bs-dismiss="offcanvas">
                  <Link  reloadDocument className="nav-link" to="/DataBlog">360Blog</Link>
                </li>
                <li className={`nav-item ${pathname === '/Contact' ? 'active' : ''}`} data-bs-dismiss="offcanvas">
                  <Link  reloadDocument className="nav-link" to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
