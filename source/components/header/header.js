import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/"  className="header__title">
        Got service
      </NavLink>
      <div className="header__menu">
        <nav className="header__nav">
          <li>
            <NavLink to="/book-page" className="header__link">
              Книги
            </NavLink>
          </li>
          <li>
            <NavLink to="/char-page" className="header__link">
              Персонажи
            </NavLink>
          </li>
          <li>
            <NavLink to="/house-page/" className="header__link">
              Дома
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
