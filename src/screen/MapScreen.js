import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { connect } from "react-redux";

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  markers = [
    {
      LatLng: {
        latitude: Number(
          this.props.navigation.state.params.coordinate.latitude
        ),
        longitude: Number(
          this.props.navigation.state.params.coordinate.longitude
        )
      },
      title: this.props.navigation.state.params.name
    },
    {
      LatLng: {
        latitude: this.props.location.coords.latitude,
        longitude: this.props.location.coords.longitude
      },
      title: "Bạn đang ở đây"
    }
  ];

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: this.props.location.coords.latitude,
            longitude: this.props.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.markers.map(m => (
            <Marker coordinate={m.LatLng} key={m.title} title={m.title} description={this.props.navigation.state.params.addr}/>
          ))}
        </MapView>
      </View>
    );
  }
}

mapStateToProps = state => {
  return ({ location } = state);
};

export default connect(mapStateToProps)(MapScreen);
