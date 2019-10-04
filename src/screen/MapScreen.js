import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { connect } from "react-redux";

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        store_coor: this.props.navigation.state.params.coordinate,
        loading: true
    }
  }
  componentDidMount() {
      this.setState({loading: false})
  }

  render() {
      this.state.loading ? 
      <ActivityIndicator/>
      :
      
    store_coor = {
        latitude: Number(this.state.store_coor.latitude),
        longitude: Number(this.state.store_coor.longitude)
      };
    user_coor = {
      latitude: this.props.location.latitude,
      longitude: this.props.location.longitude
    };
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }}>
          <Marker
            coordinate={{
        latitude: Number(this.state.store_coor.latitude),
        longitude: Number(this.state.store_coor.longitude)
      }}
          />
          <Marker
            coordinate={user_coor}
          />
        </MapView>
      </View>
    );
  }
}

mapStateToProps = state => {
  return ({ location } = state);
};

export default connect(mapStateToProps)(MapScreen);
