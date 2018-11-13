import React from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 15
      }
    };
  }

  async componentDidUpdate(prevProps) {
    if (this.props.park !== prevProps.park) {
      this.setState({
        viewport: {
          width: 600,
          height: 600,
          latitude: this.props.park.location.latitude,
          longitude: this.props.park.location.longitude,
          zoom: 15
        }
      });
    }
  }

  render() {
    return (
      <div className="Map-wrapper">
        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={viewport => this.setState({ viewport })}
          width="100%"
          heigth="100%"
        />
      </div>
    );
  }
}

export default Map;
