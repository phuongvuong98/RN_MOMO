import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from "react-native";
import Constants from "expo-constants";
//import Item from "../components/Item";


export default class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: []
    };
    //console.log(this.props);
  }

  async componentDidMount() {
    //fetch api here
    //await fetch()
    // console.log('getting recommend');
    // var res = await fetch("https://nodejs-momo.herokuapp.com/recommand", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: '5246190437244883829',
    //     password: 'macdinh'
    //   })
    // })
    //     if (res.status === 422) {
    //       //throw new Error("Validation failed.");
    //       return Error("Validation failed.");
    //     }
    //     if (res.status !== 200 && res.status !== 201) {
    //       console.log("Error!");
    //       //throw new Error("Could not authenticate you!");
    //       return Error("Could not authenticate you!");
    //     }
    //     console.log(res);
        
    //     res_json = await res.json();
      

    // console.log(res_json);
    

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

  Item = props => {
    console.log(props);
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          padding: 5,
          marginTop: 10
        }}
        onPress={() => this.props.navigation.navigate("Info")}
      >
        <Image
          style={{ height: 90, width: 90 }}
          source={require("../../assets/item/res.png")}
        />
        <View style={{ width: "100%", padding: 5 }}>
          <Text style={{ fontSize: 20 }}>Domino's Pizza</Text>
          <Text>Nhà hàng, pizza</Text>
          <Text style={{ marginTop: 10 }}>0.1 km</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
                  style={{ flex: 1, width: "100%" }}
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
          style={{
            flex: 6,
            width: "100%",
            backgroundColor: "#adadad",
            padding: 5
          }}
        >
          <FlatList
            data={this.state.data}
            keyExtractor={(i, index) => index.toString()}
            renderItem={this.Item}
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
