import React, { useState } from 'react';
import Button from './Button';
import './Navbar.css'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(false);
    const [drapdown, setDrapdown] = useState(false);

    const handlerClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const onMouseEnter = () =>{
        if (window.innerWidth<960){
            setDrapdown(false)
        }else{
            setDrapdown(true)
        }
    }
    const onMouseLeave = () =>{
        if (window.innerWidth<960){
            setDrapdown(false)
        }else{
            setDrapdown(false)
        }
    }
    return (
        <>
            <nav className="navbar">
                <Link to="/" className = "navbar-logo">
                    EPIC
                </Link>
                <div className="menu-icon" onClick={handlerClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' onClick={closeMobileMenu} className='nav-links'>Home</Link>
                    </li>
                    <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        <Link to='/Services' onClick={closeMobileMenu} className='nav-links'>Services
                        <i className = 'fas fa-caret-down' /></Link>
                        {drapdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to='/contact-us' onClick={closeMobileMenu} className='nav-links'>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' onClick={closeMobileMenu} className='nav-links-mobile'>Sign Up</Link>
                    </li>
                </ul>
                < Button />
            </nav>
        </>
    )
}

export default Navbar;
