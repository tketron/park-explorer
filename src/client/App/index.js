import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

import ParkList from '../ParkList';
import ParkDetails from '../ParkDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPark: null,
      open: true
    };
  }

  updateCurrentPark = park => {
    this.setState({ currentPark: park, open: false });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="App">
        <AppBar className={this.state.open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            className={this.state.open}
          >
            <MenuIcon />
          </IconButton>
          PARK EXPLORER
        </AppBar>
        <Drawer variant="temporary" open={this.state.open}>
          <div>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <ParkList onUpdatePark={this.updateCurrentPark} />
        </Drawer>
        {this.state.currentPark && (
          <ParkDetails park={this.state.currentPark} />
        )}
      </div>
    );
  }
}

export default App;
