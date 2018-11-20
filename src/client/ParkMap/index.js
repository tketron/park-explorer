import React from 'react';
import ReactMapGL from 'react-map-gl';
import { Map, TileLayer } from 'react-leaflet';

import './ParkMap.css';

class ParkMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 17
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
          zoom: 17
        }
      });
    }
  }

  render() {
    return (
      // <div className="Map-wrapper">
      <Map
        center={[this.state.viewport.latitude, this.state.viewport.longitude]}
        zoom={this.state.viewport.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
      // <ReactMapGL
      //   {...this.state.viewport}
      //   mapStyle="mapbox://styles/mapbox/dark-v9"
      //   onViewportChange={viewport => this.setState({ viewport })}
      //   width="100%"
      //   heigth="100%"
      // />
      // </div>
    );
  }
}

export default ParkMap;
