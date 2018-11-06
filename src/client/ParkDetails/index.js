import React from 'react';

class ParkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      park: props.park
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.park}</p>
      </div>
    );
  }
}

export default ParkDetails;
