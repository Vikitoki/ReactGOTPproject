import React from "react";
import GOTService from "../../services/got-service";

import Header from "../header/header";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import RandomItem from "../random-item/random-item";

import "./app.scss";

const gotService = new GOTService();
gotService.getRandomBook().then((data) => console.log(data));

const App = () => {
  return (
    <div className="app">
      <div className="app__container container">
        <div className="app__top">
          <Header />
        </div>
        <div className="app__content content-app">
          <div className="content-app__top">
            <RandomItem />
          </div>
          <div className="content-app__bottom">
            <div className="content-app__column">
              <ItemDetails />
            </div>
            <div className="content-app__column">
              <ItemList />
            </div>
          </div>
        </div>
        <div className="app__footer"></div>
      </div>
    </div>
  );
};

export default App;
