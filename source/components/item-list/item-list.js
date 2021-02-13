import React, { Component } from "react";
import GOTService from "../../services/got-service";
import Spinner from "../UI/Spinner/Spinner";

import "./item-list.scss";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null,
      load: true,
    };
    this.gotService = new GOTService();
  }

  componentDidMount() {
    this.updateListItems();
  }

  onLoadItemsList = (itemList) => {
    this.setState({ itemList, load: false });
  };

  updateListItems = () => {
    const { getData } = this.props;
    getData().then(this.onLoadItemsList);
  };

  renderItems = (arr) => {
    return arr.map((item, i) => {
      const name = item.name,
        label = this.props.renderItem(item);

      return (
        <li
          key={`${name}-${Math.random()}`}
          className="item-list__item"
          onClick={() => this.props.onItemSelected(this.props.addId + i)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { load, itemList } = this.state;
    const content = load ? (
      <Spinner />
    ) : (
      <ItemListBlock itemList={itemList} renderItems={this.renderItems} />
    );
    return <div className="item-list">{content}</div>;
  }
}

const ItemListBlock = ({ itemList, renderItems }) => {
  const items = renderItems(itemList);
  return <ul className="item-list__block">{items}</ul>;
};
