import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="header__title">
        Got service
      </a>
      <div className="header__menu">
        <nav className="header__nav">
          <li>
            <a href="#" className="header__link">
              Книги
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Персонажи
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Дома
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
