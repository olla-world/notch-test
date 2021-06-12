import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ href, text }) => (
  <li>
    <Link to={href}>{text}</Link>
  </li>
);

const NavBar = ({ links }) => (
  <ul>
    {links.map(({ href, text }, i) => (
      <NavLink key={i} href={href} text={text} />
    ))}
  </ul>
);

export default NavBar;