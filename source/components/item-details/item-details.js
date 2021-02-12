import React, { Component } from "react";
import GOTService from "../../services/got-service";
import Spinner from "../UI/Spinner/Spinner";

import "./item-details.scss";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      load: true,
    };
    this.gotService = new GOTService();
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const itemId = this.props.selectedItem;

    if (!itemId) {
      return;
    }

    this.gotService.getOneCharacter(itemId).then((item) => {
      this.setState({
        item,
        load: false,
      });
    });
  };

  render() {
    const { item, load } = this.state;

    if (!item) {
      return <span>Пожалуйста выберите понравившуюся вещь из списка</span>;
    }

    const content = load ? <Spinner /> : <ItemDetailsBlock item={item} />;

    return <div className="item-details">{content}</div>;
  }
}

const ItemDetailsBlock = ({ item }) => {
  const { name, gender, born, died, culture } = item;
  return (
    <>
      <div className="item-details__top">
        <div className="item-details__name">{name}</div>
      </div>
      <div className="item-details__content">
        <ul className="item-details__list">
          <li className="item-details__values values-details">
            <div className="values-details__left">Gender</div>
            <div className="values-details__right">{gender}</div>
          </li>
          <li className="item-details__values values-details">
            <div className="values-details__left">Born</div>
            <div className="values-details__right">{born}</div>
          </li>
          <li className="item-details__values values-details">
            <div className="values-details__left">Died</div>
            <div className="values-details__right">{died}</div>
          </li>
          <li className="item-details__values values-details">
            <div className="values-details__left">Culture</div>
            <div className="values-details__right">{culture}</div>
          </li>
        </ul>
      </div>
    </>
  );
};
