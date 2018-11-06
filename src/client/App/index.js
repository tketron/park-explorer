import React, { Component } from 'react';
import './App.css';

import ParkList from '../ParkList';
import ParkDetails from '../ParkDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPark: null
    };
  }

  updateCurrentPark = park => {
    this.setState({ currentPark: park });
  };

  render() {
    return (
      <div className="App">
        <ParkList onUpdatePark={this.updateCurrentPark} />
        {this.state.currentPark && (
          <ParkDetails park={this.state.currentPark} />
        )}
      </div>
    );
  }
}

export default App;
