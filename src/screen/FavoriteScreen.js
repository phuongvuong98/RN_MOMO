import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {AddHistory, AddPoint} from '../Actions'

import dis from '../../distance'

const SCREEN_WIDTH = Dimensions.get("window").width;

class FavoriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      loading: false
    };
  }

  async componentDidMount() {
    //fetch api here
    //await fetch()

    //Fake data

    this.setState({ loading: true });
    userID = email.slice(0, email.length - "@gmail.com".length);
    res = await fetch(
      "https://limitless-chamber-64175.herokuapp.com/?all=0&user_id=" +
        userID +
        "&kind="
    );
    //console.log(res);
    //res_json = JSON.parse(res);
    res_json = await res.json();

    //console.log(res_json);

    //console.log(res_json);
    this.setState({ display: res_json.result });
    this.setState({ loading: false });
  }

  Card = props => {
    //console.log(props);
    //console.log(props);
    const { link, store_name, store_address, store_latitude, store_longitude, tag } = props.item;
    distance = dis(store_latitude, store_longitude, this.props.location.coords.latitude, this.props.location.coords.longitude)
    pic = "";
    if (link == "https://localhost:3000/logo") {
      pic = require("../../assets/item/res.png");
    } else {
      pic = { uri: link };
    }
    return this.state.loading ? (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          marginTop: 10
        }}
      >
        <View
          style={{
            width: "50%",
            position: "absolute",
            top: 0,
            backgroundColor: "rgb(174,32,112)",
            zIndex: 10,
            padding: 5,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",

            elevation: 11
          }}
        >
          <Text style={{ color: "white" }}>Đi bộ cùng Topfy +{parseInt(distance)*3+1}💫</Text>
        </View>
        <View
          style={{
            // height: (SCREEN_WIDTH - 40) * 0.5,
            width: SCREEN_WIDTH - 40,
            backgroundColor: "#fff",
            borderRadius: 30,
            borderWidth: 0.5,
            borderColor: "#dbd8ce",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              padding: 10,
              marginTop: 10,
              borderRadius: 30
            }}
            onPress={() =>
              this.props.navigation.navigate("Info", {
                item: props.item,
                distance: distance
              })
            }
          >
            <Image
              style={{ height: 90, width: 90, borderRadius: 10 }}
              source={pic}
            />
            <View style={{ width: "100%", padding: 5 }}>
              <Text style={{ fontSize: 13 }}>{store_name}</Text>
              {/* <Text>{merchant_name}</Text> */}
              <Text style={{ marginTop: 10 }}>{Number((distance).toFixed(1))} km ~ {Number((distance*1000/0.75).toFixed(0))} steps</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: Constants.statusBarHeight,
            backgroundColor: "#AE2070"
          }}
        ></View>
        <View style={{ flex: 1, width: "100%", backgroundColor: "white" }}>
          <ScrollView
            style={{ flex: 6, width: "100%", backgroundColor: "white" }}
          >
            <FlatList
              data={this.state.display}
              renderItem={this.Card}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return ({location} = state)
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps)(FavoriteScreen)