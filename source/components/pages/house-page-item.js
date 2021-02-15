import React, { Component } from "react";
import GOTService from "../../services/got-service";
import ItemDetails, { Field } from "../item-details/item-details";

export default class HousePageItem extends Component {
  constructor(props) {
    super(props);

    this.gotService = new GOTService();
  }

  render() {
    return (
      <ItemDetails
        getData={this.gotService.getOneHouse}
        selectedItem={this.props.houseId}
      >
        <Field label="Region" field="region" />
        <Field label="Words" field="words" />
        <Field label="Titles" field="titles" />
        <Field label="Overload" field="overload" />
        <Field label="Ancestral Weapons" field="ancestralWeapons" />
      </ItemDetails>
    );
  }
}
