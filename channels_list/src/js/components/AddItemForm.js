import React, { Component } from "react";

class AddItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: "" });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="value"
            value={value}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success btn-lg">
            {this.props.buttonText}
          </button>
        </div>
      </form>
    );
  }
}

export default AddItemForm;