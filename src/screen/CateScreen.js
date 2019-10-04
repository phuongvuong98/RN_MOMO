import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";
import { connect } from "react-redux";
import Item from "../components/Item";

const SCREEN_WIDTH = Dimensions.get("window").width;

const pic_size = SCREEN_WIDTH / 10;

class CateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      api_kind: "",
      loading: false,

      display: []
    };
  }

  Item = props => {
    const { link, store_name, store_address } = props.item;
    pic = "";
    if (link == "https://localhost:3000/logo") {
      pic = require("../../assets/item/res.png");
    } else {
      pic = { uri: link };
    }
    return (
      <TouchableOpacity
        style={{
          width: SCREEN_WIDTH - 20,
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          padding: 10,
          marginTop: 10,
          borderRadius: 5
        }}
        onPress={() =>
          this.props.navigation.navigate("Info", { item: props.item, pic: pic })
        }
      >
        <Image style={{ height: 90, width: 90 }} source={pic} />
        <View style={{ width: "100%", padding: 5 }}>
          <Text style={{ fontSize: 15 }}>{store_name}</Text>
          {/* <Text>{merchant_name}</Text> */}
          <Text style={{ marginTop: 10 }}>0.1 km</Text>
        </View>
      </TouchableOpacity>
    );
  };

  ChangeCate = async newCate => {
    switch (newCate) {
      case "shop":
        this.setState({ header: "Khu mua sắm", api_kind: "shopping" });
        break;
      case "sm":
        this.setState({ header: "Siêu thị", api_kind: "supermarket" });
        break;
      case "food":
        this.setState({ header: "Ăn thoả thích", api_kind: "food" });
        break;
      case "bev":
        this.setState({ header: "Uống giải khác", api_kind: "beverage" });
        break;
      case "cvs":
        this.setState({ header: "Cửa hàng tiện lợi", api_kind: "cvs" });
        break;
      case "fnb":
        this.setState({ header: "Bánh kem", api_kind: "fnb" });
        break;
      case "other":
        this.setState({ header: "Dịch vụ thanh toán khác", api_kind: "oops" });
        break;
      default:
        break;
    }

    this.setState({ loading: true });
    userID = email.slice(0, email.length - "@gmail.com".length);
    res = await fetch(
      "https://limitless-chamber-64175.herokuapp.com/?all=0&user_id=" +
        userID +
        "&kind=" +
        this.state.api_kind
    );
    //console.log(res);
    //res_json = JSON.parse(res);
    res_json = await res.json();

    //console.log(res_json);

    console.log(res_json);
    this.setState({ display: res_json.result });

    this.setState({ loading: false });
  };

  Item = props => {
    console.log(props);
    const { link, store_name, store_address } = props.item;
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
          this.props.navigation.navigate("Info", { item: props.item, pic: pic })
        }
      >
        <Image style={{ height: 90, width: 90 }} source={pic} />
        <View style={{ width: "100%", padding: 5 }}>
          <Text style={{ fontSize: 13 }}>{store_name}</Text>
          {/* <Text>{merchant_name}</Text> */}
          <Text style={{ marginTop: 10 }}>0.1 km</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <ImageBackground
            style={{
              flex: 1,
              alignItems: "center"
            }}
            source={require("../../assets/login/288776-full_10-new-hd-white-gradient-background-full-hd-1920-1080-for-pc.jpg")}
          >
            <ImageBackground
              style={{
                width: SCREEN_WIDTH,
                paddingTop: Constants.statusBarHeight
              }}
              source={require("../../assets/cloud.jpg")}
            >
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "rgba(219, 219, 219, 0.8)",
                  margin: 10,
                  padding: 10
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingHorizontal: 15
                  }}
                >
                  <TouchableOpacity onPress={() => this.ChangeCate("shop")}>
                    <Image
                      source={require("../../assets/cate/shop.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.ChangeCate("sm")}>
                    <Image
                      source={require("../../assets/cate/sm.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.ChangeCate("food")}>
                    <Image
                      source={require("../../assets/cate/food.png")}
                      style={{ height: pic_size + 10, width: pic_size + 10 }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15
                  }}
                >
                  <TouchableOpacity onPress={() => this.ChangeCate("bev")}>
                    <Image
                      source={require("../../assets/cate/bev.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.ChangeCate("cvs")}>
                    <Image
                      source={require("../../assets/cate/cvs.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.ChangeCate("fnb")}>
                    <Image
                      source={require("../../assets/cate/fnb.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.ChangeCate("other")}>
                    <Image
                      source={require("../../assets/cate/other.png")}
                      style={{ height: pic_size - 5, width: pic_size - 5 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>{this.state.header}</Text>
            </View>
            {this.state.loading ? (
              <ActivityIndicator />
            ) : (
              <View style={{ backgroundColor: "#adadad" }}>
                <FlatList
                  data={this.state.display}
                  keyExtractor={(i, index) => index.toString()}
                  renderItem={this.Item}

                  // onEndReached={this.getMoreMer}
                  // onEndReachedThreshold={1}
                  // ListFooterComponent={this.renderFooter}
                />
              </View>
            )}
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: pic_size,
    width: pic_size
  }
});

mapStateToProps = state => {
  return ({ email } = state);
};

//export default connect(mapStateToProps)(CateScreen)

export default CateScreen;
