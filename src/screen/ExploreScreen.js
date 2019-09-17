import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import Constants from "expo-constants";

export default class ExploreScreen extends Component {
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
      },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.center,
            {
              flex: 1,
              width: "100%",
              backgroundColor: "#AE2070",
              paddingTop: Constants.statusBarHeight
            }
          ]}
        >
          <View
            style={[styles.center, { height: 80, width: "100%", padding: 10 }]}
          >
            <View
              style={[
                styles.center,
                {
                  height: 48,
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 5,
                  flexDirection: "row"
                }
              ]}
            >
              <TouchableOpacity
                style={[styles.center, { height: 48, width: 48 }]}
                onPress={() => {}}
              >
                <Image source={require("../../assets/home/menu.png")} />
              </TouchableOpacity>

              <View style={{ flex: 1, width: "100%" }}>
                <TextInput
                  onChangeText={input => this.setState({ input })}
                  value={this.state.input}
                  placeholder="Tôi muốn tìm..."
                  style={{flex: 1, width: '100%'}}
                />
              </View>

              <TouchableOpacity
                style={[styles.center, { height: 48, width: 48 }]}
                onPress={() => {}}
              >
                <Image source={require("../../assets/home/mic.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{ flex: 6, width: "100%", backgroundColor: "white" }}
        >
          <Text style={{paddingLeft: 5, color: 'gray'}}>Gợi ý dành cho bạn</Text>
          <FlatList
          data={this.state.data}

          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});
