import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";

import CardFullScreen from '../components/CardFullScreen'

export default class FavoriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: []
    };
  }

  async componentDidMount() {
    //fetch api here
    //await fetch()

    //Fake data
    data = [
      {
        name: "Domino pizza",
        category: "Nhà hàng, Pizza",
        distance: 0.1
      },
      {
        name: "Domino pizza",
        category: "Nhà hàng, Pizza",
        distance: 0.1
      }
    ];
    this.setState({ data });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 6, width: "100%", backgroundColor: "white" }}>
          <ScrollView
            style={{ flex: 6, width: "100%", backgroundColor: "white" }}
          >
            <FlatList
              data={this.state.data}
              renderItem={CardFullScreen}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
