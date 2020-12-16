import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

const style = {
  width: "100%",
  height: "450px",
  position: "relative",
};

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={{ marginTop: 89 }}
        className="GoogleMap__vd"
        containerStyle={style}
        initialCenter={{
          lat: 47.394528,
          lng: 8.654847,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div><h1>{this.state.selectedPlace.name}</h1></div> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD-1lKHa_pdaCs0JyeyfLsnyK06Px6yWeg",
})(GoogleMap);
