import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo_white from './logo_white.png';

function Navbar() {

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

  window.addEventListener('resize', showButton);

  return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <h2>
            <img  alt='top-logo' src={logo_white} width="50" height="50" />              ieldRocket</h2>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              <NavHashLink to="/#top"
              scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>
              <div className='nav-links'>
                    Home
                  </div>
              </NavHashLink>
              </li>
              <li className='nav-item'>
                <NavHashLink smooth to="/#tokenomics"
                scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center', inline: "nearest" })}>
                  <div className='nav-links'>
                    Tokenomics
                  </div>
                </NavHashLink>
              </li>
              <li className='nav-item'>
              <NavHashLink to="/#roadmap"
              scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center', inline: "nearest" })}>
                <div className='nav-links'>
                    Roadmap
                  </div>
              </NavHashLink>
              </li>
              <li className='nav-item'>
              <NavHashLink to="/#buy"
              scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end', inline: "nearest" })}>
              <div className='nav-links'>
                    Buy
                  </div>
              </NavHashLink>
              </li>
              <li className='nav-item'>
              <NavHashLink to="cryptonauts"
              scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end', inline: "nearest" })}>
              <div className='nav-links'>
                    NFT
                  </div>
              </NavHashLink>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='dashboard' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Dashboard</Button>
                  </Link>
                ) : (
                  <Link to='dashboard' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
            <nav>
                  
    </nav>
          </div>
        </nav>
      </IconContext.Provider>
  );
}

export default Navbar;