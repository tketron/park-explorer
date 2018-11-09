import React from 'react';
import axios from 'axios';

class ParkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rideWaitTimes: []
    };
  }

  async componentDidMount() {
    if (this.props.park !== null) {
      const waitTimes = await axios.get(
        `/themeparks/${this.props.park.park}/waittimes`
      );
      this.setState({ rideWaitTimes: waitTimes.data });
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.park.name !== prevProps.park.name) {
      this.setState({ rideWaitTimes: [] });
      const waitTimes = await axios.get(
        `/themeparks/${this.props.park.park}/waittimes`
      );
      this.setState({ rideWaitTimes: waitTimes.data });
    }
  }

  render() {
    return (
      <div>
        {this.props.park && <p>{this.props.park.name}</p>}
        <div>
          {this.state.rideWaitTimes.map(ride => {
            return (
              <p>
                {ride.name} -- {ride.waitTime}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ParkDetails;
