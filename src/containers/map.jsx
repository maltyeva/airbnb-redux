import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

class Map extends Component {

  constructor(props) {
    super(props)

    this.state = {
      center: {
        lat: 48.88184,
        lng: 2.343371
      }
    }
  };

  static defaultProps = {
    zoom: 14
  };

  render() {
    return (
      <div className="col-sm-5" style={{ height: '100vh' }}>
         <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.center}
          defaultZoom={this.props.zoom}
        >
         
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;



 