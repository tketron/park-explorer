import React from 'react';
import axios from 'axios';

class ParkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  async componentDidMount() {
    const parksList = await axios.get('/themeparks/names');
    this.setState({
      parks: parksList.data
    });
  }

  render() {
    return (
      <div>
        <h1>Parks List</h1>
        <ul>
          {this.state.parks.map(park => {
            return <li>{park}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ParkList;
