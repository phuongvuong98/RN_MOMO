import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {AddHistory, AddPoint} from '../Actions'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const InfoScreen = props => {
  const {
    store_name,
    store_address,
    link,
    tag,
    store_latitude,
    store_longitude
  } = props.navigation.state.params.item;
  const distance = props.navigation.state.params.distance;
  const point1 = parseInt(distance) * 3 + 1;
  pic = "";
  if (link == "https://localhost:3000/logo") {
    pic = require("../../assets/item/res.png");
  } else {
    pic = { uri: link };
  }

  addNewPayment = async () => {
    await props.AddHistory({store_name, point: point1})
    await props.AddPoint(point1)


    await AsyncStorage.setItem('history', JSON.stringify(history))
    await AsyncStorage.setItem('point', point.toString())


  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: width, height: width }}
        source={pic}
        resizeMode="cover"
      />
      <View
        style={[
          { borderBottomWidth: 0.8, borderBottomColor: "gray" },
          styles.center
        ]}
      >
        <Text style={styles.title}>{store_name}</Text>
      </View>
      <View
        style={[
          styles.center,
          {
            flexDirection: "row",
            padding: 2,
            borderBottomColor: "gray",
            borderBottomWidth: 0.8
          }
        ]}
      >
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Map", {
              coordinate: {
                latitude: store_latitude,
                longitude: store_longitude
              },
              name: store_name,
              addr: store_address
            })
          }
        >
          <Image
            source={require("../../assets/info/direction.png")}
            style={styles.icon}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("History")}>
          <Image
            source={require("../../assets/info/history.png")}
            style={styles.icon}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", padding: 5 }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <View style={[styles.center, { height: 30, width: 30 }]}>
            <Image
              source={require("../../assets/info/info.png")}
              style={{ height: 28, width: 28 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ marginLeft: 15 }}>{tag}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[styles.center, { height: 30, width: 30, marginLeft: 5 }]}
          >
            <Image
              source={require("../../assets/info/loca.png")}
              style={{ height: 28, width: 28 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ marginLeft: 10, marginRight: 20 }}>
            {store_address}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Text>Điểm thưởng đi bộ cùng Topfy: {point}💫</Text>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#AE2070",
              borderWidth: 1
            }}
            onPress={() =>
              Alert.alert(
                "Xác nhận thanh toán",
                store_name,
                [
                  { text: "OK", onPress: () => addNewPayment() },
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                ],
                { cancelable: false }
              )
            }
          >
            <Text style={{ color: "white" }}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  icon: {
    height: 62,
    width: 56
  }
});

mapStateToProps = (state) => {
  return ({history, point} = state)
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({AddHistory, AddPoint}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen);
