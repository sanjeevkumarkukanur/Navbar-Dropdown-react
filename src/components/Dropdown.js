import React, { useState } from 'react';
import { MenuItems }from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';


function Dropdown() {
    const [click, setClick]= useState(false);

    const handlerClick = () => setClick(false);
    
    return (
        <>
        <ul onClick={handlerClick}
        className={click ? 'dropdown-menu clicked':'dropdown-menu'}>
            {MenuItems.map((item, index)=>{
                return (
                    <li key ={index}>
                        <Link className={item.cName}
                        to={item.path}
                        onClick={ () => setClick(false)
                        }>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
            
        </>
    )
}
export default Dropdown
