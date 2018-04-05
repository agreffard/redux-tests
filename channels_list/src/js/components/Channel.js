import React, { Component } from 'react';

class Channel extends Component {

  onDelete = (event) => {
    this.props.onDelete(this.props.channel.id);
  }

  render() {
    return (
      <div>
        {this.props.channel.name}
        <button onClick={this.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Channel;
