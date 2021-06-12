import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/navbar.style.css'

const NavLink = ({ href, text, type, img_src }) => (
  <div>
    <Link to={href}>
      {type==='brand'?
        <img 
          className="logo"
          src={img_src} 
          alt="brand logo"
        /> 
        : text
      }
    </Link>
  </div>
);

const NavBar = ({ links }) => (
  <div className="navbar">
    {links.map(({ href, text, type, img_src }, i) => (
      <NavLink 
        key={i} 
        href={href} 
        text={text} 
        type={type}
        img_src={img_src}/>
    ))}
  </div>
);

export default NavBar;