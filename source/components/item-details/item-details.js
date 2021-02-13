import React, { Component } from "react";
import GOTService from "../../services/got-service";
import Spinner from "../UI/Spinner/Spinner";

import "./item-details.scss";

const Field = ({ item, field, label }) => {
  return (
    <li className="item-details__values values-details">
      <div className="values-details__left">{label}</div>
      <div className="values-details__right">{item[field]}</div>
    </li>
  );
};

export { Field };

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
    const itemId = this.props.selectedItem,
      getData = this.props.getData;

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        load: false,
      });
    });
  };

  render() {
    const { item, load } = this.state;

    if (!item) {
      return (
        <span className="item-details__choose">
          Пожалуйста выберите понравившуюся вещь из списка
        </span>
      );
    }

    const content = load ? (
      <Spinner />
    ) : (
      <ItemDetailsBlock children={this.props.children} item={item} />
    );

    return <div className="item-details">{content}</div>;
  }
}

const ItemDetailsBlock = ({ item, children }) => {
  const { name } = item;

  return (
    <>
      <div className="item-details__top">
        <div className="item-details__name">{name}</div>
      </div>
      <div className="item-details__content">
        <ul className="item-details__list">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </>
  );
};
