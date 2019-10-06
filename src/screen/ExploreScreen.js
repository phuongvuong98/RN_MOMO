import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";
//import Item from "../components/Item";
import Item from "../components/Item";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import dis from '../../distance'

class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: [],
      display: [],
      page: 1
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
    this.setState({ data: this.props.merchants.page0 });
    this.setState({ display: this.props.merchants.page0 });
    //this.setState({data})
  }

  search = input => {
    this.setState({ input });
    newMerchants = [...this.state.data];
    //console.log(newMerchants[0].store_name.toLowerCase());
    newMerchants_filter = newMerchants.filter(m =>
      m.store_name.toLowerCase().includes(input.toLowerCase())
    );
    //console.log(newMerchants);
    this.setState({ display: newMerchants_filter });
  };

  renderFooter = () => {
    if(this.state.input === ""){
    return <ActivityIndicator size="large" loading={loading} style={{marginTop: 10}}/>;
    } else{
      return <View style={{width: '100%', marginTop: 10}}><Text>Hết rồi! Bạn muốn xem thêm thì làm trống search nhé ^^</Text></View>
    }
  };

  getMoreMer = () => {
    if (this.state.input === "") {
      //console.log(this.props.merchants['page1']);
      newPage = "page" + this.state.page.toString();
      newMerchants = [...this.state.data, ...this.props.merchants[newPage]];

      this.setState({ data: newMerchants });
      this.setState({ display: newMerchants });
    }
  };

  Item = props => {
    //console.log(props);
    const { link, store_name, store_address, store_latitude, store_longitude } = props.item;
    distance = dis(store_latitude, store_longitude, this.props.location.coords.latitude, this.props.location.coords.longitude)
    pic = "";
    if (link == "https://localhost:3000/logo") {
      pic = require("../../assets/item/res.png");
    } else {
      pic = { uri: link };
    }
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          padding: 10,
          marginTop: 10,
          borderRadius: 5
        }}
        onPress={() =>
          this.props.navigation.navigate("Info", { item: props.item, distance: distance })
        }
      >
        <Image style={{ height: 90, width: 90 }} source={pic} />
        <View style={{ width: "100%", padding: 5 }}>
          <Text style={{ fontSize: 13 }}>{store_name}</Text>
          {/* <Text>{merchant_name}</Text> */}
          <Text style={{ marginTop: 10 }}>{Number((distance).toFixed(1))} km ~ {Number((distance*1000/0.75).toFixed(0))} steps</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    //console.log(this.props.location);
    //console.log(this.props.merchants);

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
                onPress={this.props.navigation.openDrawer}
              >
                <Image source={require("../../assets/home/menu.png")} />
              </TouchableOpacity>

              <View style={{ flex: 1, width: "100%" }}>
                <TextInput
                  onChangeText={input => this.search(input)}
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
            data={this.state.display}
            keyExtractor={(i, index) => index.toString()}
            renderItem={this.Item}
            onEndReached={this.getMoreMer}
            onEndReachedThreshold={1}
            ListFooterComponent={this.renderFooter}
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

mapStateToProps = state => {
  return ({ location, merchants } = state);
};

export default connect(mapStateToProps)(ExploreScreen);
