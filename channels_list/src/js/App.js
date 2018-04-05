import React, { Component } from 'react';
import '../css/App.css';
import ChannelsListWithSearch from './components/ChannelsListWithSearch.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChannelsListWithSearch />
      </div>
    );
  }
}

export default App;
