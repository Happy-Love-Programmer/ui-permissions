import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItemProps } from 'types/frontend';

const NavbarItem: React.FC<NavbarItemProps> = ({ to, title }) => (
  <li className="navbar-item">
    <i className="navbar-item-icon"></i>
    <NavLink
      to={to}
      title={title}
      className={({ isActive }) => (isActive ? 'navbar-item-link navbar-item-link-active' : 'navbar-item-link')}
    >
      {title}
    </NavLink>
  </li>
);

export default NavbarItem;