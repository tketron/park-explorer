import React from 'react';

class ParkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkObject: null
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>{this.props.park.name}</p>
      </div>
    );
  }
}

export default ParkDetails;
