import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" />

      <div className={s.loginBlock}> 
          <NavLink to={'/login'}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
