import React from 'react';
import axios from 'axios';

import ParkListItem from '../ParkListItem';

class ParkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      currentPark: null
    };
  }

  async componentDidMount() {
    const parksList = await axios.get('/themeparks/all');
    this.setState({
      parks: parksList.data
    });
  }

  updateCurrentPark = park => {
    this.setState({ currentPark: park });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Parks List</h1>
          {this.state.parks.map((park, idx) => {
            return (
              <ParkListItem
                key={idx}
                name={park.name}
                onClick={() => this.updateCurrentPark(park.park)}
              />
            );
          })}
        </div>
        <p>{this.state.currentPark}</p>
      </div>
    );
  }
}

export default ParkList;
