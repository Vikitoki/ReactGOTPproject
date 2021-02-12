import React, { Component } from "react";
import GOTService from "../../services/got-service";
import Spinner from "../UI/Spinner/Spinner";
import ErrorMessage from "../UI/ErrorMessage/Error-message";

import "./random-item.scss";

export default class RandomItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      load: true,
      error: false,
    };
    this.gotService = new GOTService();
  }

  componentDidMount() {
    this.updateItem();
    this.timer = setInterval(() => {
      this.updateItem();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onItemLoaded = (item) => {
    this.setState({ item, load: false });
  };

  onItemError = (err) => {
    this.setState({ error: true });
  };

  updateItem = () => {
    this.gotService
      .getRandomCharacter()
      .then(this.onItemLoaded)
      .catch(this.onItemError);
  };

  render() {
    const { item, load, error } = this.state;

    const content = error ? (
      <ErrorMessage />
    ) : load ? (
      <Spinner />
    ) : (
      <RandomItemBlock item={item} />
    );

    return <div className="random-item">{content}</div>;
  }
}

const RandomItemBlock = ({ item }) => {
  const { name, gender, born, died, culture } = item;

  return (
    <>
      <div className="random-item__top">
        <div className="random-item__name">{name}</div>
      </div>
      <div className="random-item__content">
        <ul className="random-item__list">
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Gender</div>
            <div className="values-random-item__right">{gender}</div>
          </li>
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Born</div>
            <div className="values-random-item__right">{born}</div>
          </li>
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Died</div>
            <div className="values-random-item__right">{died}</div>
          </li>
          <li className="random-item__values values-random-item">
            <div className="values-random-item__left">Culture</div>
            <div className="values-random-item__right">{culture}</div>
          </li>
        </ul>
      </div>
    </>
  );
};
