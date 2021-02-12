import React, { Component } from "react";
import GOTService from "../../services/got-service";
import Spinner from "../UI/Spinner/Spinner";

import "./item-list.scss";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charlist: null,
      load: true,
    };
    this.gotService = new GOTService();
  }

  componentDidMount() {
    this.updateListItems();
  }

  onLoadItemsList = (charlist) => {
    this.setState({ charlist, load: false });
  };

  updateListItems = () => {
    this.gotService.getAllCharacters().then(this.onLoadItemsList);
  };

  renderItems = (arr) => {
    return arr.map(({ name }, i) => {
      return (
        <li
          key={`${name}-${Math.random()}`}
          className="item-list__item"
          onClick={() => this.props.onItemSelected(41+i)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { load, charlist } = this.state;
    const content = load ? (
      <Spinner />
    ) : (
      <ItemListBlock charlist={charlist} renderItems={this.renderItems} />
    );
    return <div className="item-list">{content}</div>;
  }
}

const ItemListBlock = ({ charlist, renderItems }) => {
  const items = renderItems(charlist);
  return <ul className="item-list__block">{items}</ul>;
};
