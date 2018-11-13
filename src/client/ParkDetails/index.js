import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ride Name</TableCell>
              <TableCell>Current Wait Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rideWaitTimes.map((ride, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {ride.name}
                  </TableCell>
                  <TableCell numeric>{ride.waitTime}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ParkDetails;
