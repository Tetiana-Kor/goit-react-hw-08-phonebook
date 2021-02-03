import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
