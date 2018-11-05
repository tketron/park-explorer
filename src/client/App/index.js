import React, { Component } from 'react';
import './App.css';

import ParkList from '../ParkList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParkList />
      </div>
    );
  }
}

export default App;
