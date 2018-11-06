import React from 'react';
import axios from 'axios';

import ParkListItem from '../ParkListItem';

class ParkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  async componentDidMount() {
    const parksList = await axios.get('/themeparks/all');
    this.setState({
      parks: parksList.data
    });
  }

  render() {
    return (
      <div>
        <h1>Parks List</h1>
        <ul>
          {this.state.parks.map((park, idx) => {
            return <ParkListItem key={idx} name={park.name} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ParkList;
