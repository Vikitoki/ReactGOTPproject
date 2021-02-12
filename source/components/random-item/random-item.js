import React from "react";

import "./random-item.scss";

const RandomItem = () => {
  return (
    <div className="random-item">
      <div className="random-item__top">
        <div className="random-item__name">Rigis</div>
      </div>
      <div className="random-item__content">
        <ul className="random-item__list">
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Gender</div>
            <div className="values-random-item__right">Vale</div>
          </li>
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Gender</div>
            <div className="values-random-item__right">Vale</div>
          </li>
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Gender</div>
            <div className="values-random-item__right">Vale</div>
          </li>
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Gender</div>
            <div className="values-random-item__right">Vale</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomItem;
