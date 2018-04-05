import React, { Component } from 'react';

class SearchBar extends Component {
  
  handleChange = (event) => {
    this.props.onFilter(event.target.value);
  }

  render() {

    return (
      <div>
        Search: 
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBar;
