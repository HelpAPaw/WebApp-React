import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap = () => {
    if (!window.google) {
      const GOOGLE_MAP_API_KEY = "AIzaSyBWtGcNoFURPqOGSzdRQq0jTom0eFICaNg";
      let index = window.document.getElementsByTagName("script")[0]; //selects first script tag
      const googleMapScript = window.document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
      //googleMapScript.async = true;
      googleMapScript.defer = true;
      index.parentNode.insertBefore(googleMapScript, index);
      googleMapScript.addEventListener("load", () => {
        this.googleMap = this.createGoogleMap();
      });
    }
  };
  componentWillUnmount() {
    this.loadMap();
  }
  createGoogleMap = () => {
    if (navigator.geolocation) {
      //get location if permission granted
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        //create map from Google Map
        const map = new window.google.maps.Map(this.googleMapRef.current, {
          zoom: 16,
          center: new window.google.maps.LatLng(lat, lng),
          disableDefaultUI: true,
        });
        //create marker in current position
        const marker = new window.google.maps.Marker({
          map: map,
          position: new window.google.maps.LatLng(lat, lng),
          title: "You are here!",
        });
        marker.setMap(map);
      });
    }
  };

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "100%", height: "80vh" }}
      />
    );
  }
}

export default Map;
