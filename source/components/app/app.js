import React, { Component } from "react";
import GOTService from "../../services/got-service";

import Header from "../header/header";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import RandomItem from "../random-item/random-item";
import Button from "../UI/Button/Button";

import "./app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleRandom: true,
      selectedItem: null,
    };
  }

  onToggleRandom = () => {
    this.setState({
      visibleRandom: !this.state.visibleRandom,
    });
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {

    const { visibleRandom, selectedItem } = this.state;

    const random = visibleRandom ? <RandomItem /> : null;

    return (
      <div className="app">
        <div className="app__container container">
          <div className="app__top">
            <Header />
          </div>
          <div className="app__content content-app">
            <div className="content-app__top">
              <div className="content-app__random">{random}</div>
              <div className="content-app__btn">
                <Button
                  onClick={this.onToggleRandom}
                  view="primary"
                  label="Toggle visability of random block"
                />
              </div>
            </div>
            <div className="content-app__bottom">
              <div className="content-app__column">
                <ItemDetails selectedItem={selectedItem} />
              </div>
              <div className="content-app__column">
                <ItemList onItemSelected={this.onItemSelected} />
              </div>
            </div>
          </div>
          <div className="app__footer"></div>
        </div>
      </div>
    );
  }
}
