import React, { Component } from "react";
import GOTService from "../../services/got-service";

import ItemDetails, { Field } from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import ErrorMessage from "../UI/ErrorMessage/Error-message";

export default class BookPage extends Component {
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
        <ItemDetails
          getData={this.gotService.getOneBook}
          selectedItem={selectedItem}
        >
          <Field label="Number Of Pages" field="numberOfPages" />
          <Field label="Publiser" field="publiser" />
          <Field label="Released" field="released" />
        </ItemDetails>
      ),
      itemList = (
        <ItemList
          addId={1}
          getData={this.gotService.getAllBooks}
          onItemSelected={this.onItemSelected}
          renderItem={(item) => `${item.name} (${item.numberOfPages})`}
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
