import React, { Component } from "react";
import GOTService from "../../services/got-service";

import ItemDetails, { Field } from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import ErrorMessage from "../UI/ErrorMessage/Error-message";

export default class CharPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
      error: false,
    };

    this.gotService = new GOTService();
  }
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { error, selectedItem } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const itemDetails = (
        <ItemDetails getData={this.gotService.getOneCharacter} selectedItem={selectedItem}>
          <Field label="Gender" field="gender" />
          <Field label="Born" field="born" />
          <Field label="Died" field="died" />
          <Field label="Culture" field="culture" />
        </ItemDetails>
      ),
      itemList = (
        <ItemList
					addId = {41}
          getData={this.gotService.getAllCharacters}
          onItemSelected={this.onItemSelected}
          renderItem={(item) => `${item.name} (${item.gender})`}
        />
      );

    return (
      <>
        <div className="content-app__column">{itemList}</div>
        <div className="content-app__column">{itemDetails}</div>
      </>
    );
  }
}
