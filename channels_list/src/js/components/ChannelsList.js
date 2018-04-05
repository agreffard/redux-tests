import React, { Component } from 'react';
import Channel from './Channel.js';

class ChannelsList extends Component {

  render() {

    const channelsList = this.props.channels.map(channel => (
      <li key={channel.id}>
        <Channel channel={channel} onDelete={this.props.onDelete}/>
      </li>
      ));

    return (
      <ul>
        {channelsList}
      </ul>
    );
  }
}

export default ChannelsList;
