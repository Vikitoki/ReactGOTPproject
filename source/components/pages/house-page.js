import React, { Component } from "react";
import GOTService from "../../services/got-service";
import { withRouter } from "react-router-dom";

import ItemList from "../item-list/item-list";
import ErrorMessage from "../UI/ErrorMessage/Error-message";

class HousePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    this.gotService = new GOTService();
  }

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        addId={1}
        getData={this.gotService.getAllHouses}
        onItemSelected={(itemId) =>
          this.props.history.push(`/house-page/${itemId}`)
        }
        renderItem={(item) => `${item.name} (${item.region})`}
      />
    );

    return (
      <>
        <div className="content-app__column">{itemList}</div>
      </>
    );
  }
}

export default withRouter(HousePage);
