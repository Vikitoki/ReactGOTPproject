import React, { Component } from "react";

import Header from "../header/header";
import RandomItem from "../random-item/random-item";
import Button from "../UI/Button/Button";
import ErrorMessage from "../UI/ErrorMessage/Error-message";

import CharPage from "../pages/char-page";
import BookPage from "../pages/book-page";
import HousePage from "../pages/house-page";

import "./app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleRandom: true,
      error: false,
    };
  }

  componentDidCatch() {
    console.log(err);
    this.setState({
      error: true,
    });
  }

  onToggleRandom = () => {
    this.setState({
      visibleRandom: !this.state.visibleRandom,
    });
  };

  render() {
    const { visibleRandom, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

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
              <BookPage />
            </div>
          </div>
          <div className="app__footer"></div>
        </div>
      </div>
    );
  }
}
