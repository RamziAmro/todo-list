import React, { Component } from "react";

import "./AddItem.css";

class AddItem extends Component {
  state = {
    name: "",
  };

  nameChangedHandler = (event) => {
    //event.preventDefault();
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="AddItem">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />

        <button onClick={() => this.props.itemAdded(this.state.name)}>
          Add Item
        </button>
      </div>
    );
  }
}

export default AddItem;