import React from "react";

import "./item-details.scss";

const ItemDetails = () => {
  return (
    <div className="item-details">
      <div className="item-details__top">
        <div className="item-details__name">Augusta</div>
      </div>
      <div className="item-details__content">
        <ul className="item-details__list">
          <li className="item-details__values values-details">
            <div className="values-details__left">Gender</div>
            <div className="values-details__right">Male</div>
          </li>
          <li className="item-details__values values-details">
            <div className="values-details__left">Gender</div>
            <div className="values-details__right">Male</div>
          </li>
          <li className="item-details__values values-details">
            <div className="values-details__left">Gender</div>
            <div className="values-details__right">Male</div>
          </li>
          <li className="item-details__values values-details">
            <div className="values-details__left">Gender</div>
            <div className="values-details__right">Male</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
