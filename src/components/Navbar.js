import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Button2 } from './Button2';
import { Link } from 'react-router-dom';
import './Navbar.css';
import temp from './trial.js'
import { Redirect } from 'react-router-dom';
import Dropdown from './Dropdown.js'
import Axios from 'axios'

import DarkTheme, { createTheme } from 'react-dark-theme'

const lightTheme = {
  background: 'white',
  text: 'black',
}
 
const darkTheme = {
  background: 'black',
  text: 'white',
}
 
const myTheme = createTheme(darkTheme, lightTheme)

function Navbar(props){

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        props.login();
      }
    });
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const s=localStorage.getItem('status')


  window.addEventListener('resize', showButton);



  return (
    <>
      <nav className='my-navbar'>

        <div className='my-navbar-container'>
          &nbsp;&nbsp;&nbsp;
          <DarkTheme light={lightTheme} dark={darkTheme} />
          <Link to='/' className='my-navbar-logo' onClick={closeMobileMenu}>
            LET'S GOA  
            <i className='fab fa-typo3' />
          </Link>
          
          <div className='my-menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'my-nav-menu active' : 'my-nav-menu'}>
            <li className='my-nav-item'>
              <Link to='/' className='my-nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='my-nav-item'>
              <Link
                to='/services'
                className='my-nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='my-nav-item'>
              <Link
                to='/products'
                className='my-nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='my-nav-item'>
              <Link
                to='/About-us'
                className='my-nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
            {props.status && //<Dropdown/>
                        <Link
                          to='/logout'
                          className='my-nav-links-mobile'
                          onClick={closeMobileMenu}
                       >
                       Log Out
                       </Link>
              }
               {props.status ||
                       <Link
                          to='/sign-up'
                          className='my-nav-links-mobile'
                          onClick={closeMobileMenu}
                       >
                       Log In
                       </Link>
              }

            </li>
          </ul>
          {props.status && button &&  <Dropdown/>} 
          {props.status || button && <Button2 buttonStyle='mybtn--outline' > {props.status ? "LOG OUT" : "LOG IN"}</Button2>} 
           </div>
      </nav>
    </>
  );
}
export default Navbar;
