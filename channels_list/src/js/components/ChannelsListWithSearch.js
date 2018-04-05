import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchBar from './SearchBar.js';
import ChannelsList from './ChannelsList.js';
import AddItemForm from './AddItemForm.js';
import uuidv1 from "uuid";
import { addChannel, deleteChannel } from "../actions/index";
  
const mapStateToProps = state => {
  return {
    channels: state.channels
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addChannel: channel => dispatch(addChannel(channel)),
    deleteChannel: id => dispatch(deleteChannel(id))
  };
};

class ConnectedChannelsListWithSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    }
  }

  filterChannels = (txt) => {
    this.setState({filter: txt.toLowerCase()});
  }

  addNewChannel = (name) => {
    const id = uuidv1();
    this.props.addChannel({ name, id });
  }

  deleteChannel = (id) => {
    this.props.deleteChannel(id);
  }

  render() {

    const filteredChannels = this.props.channels && this.props.channels.filter(channel => channel.name.toLowerCase().match(this.state.filter));

    return (
      <React.Fragment>
        <SearchBar onFilter={this.filterChannels}/>
        <ChannelsList channels={filteredChannels} onDelete={this.deleteChannel}/>
        <AddItemForm buttonText="Add new channel" onSubmit={this.addNewChannel}/>
      </React.Fragment>
    );
  }
}

const ChannelsListWithSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedChannelsListWithSearch);

export default ChannelsListWithSearch;
