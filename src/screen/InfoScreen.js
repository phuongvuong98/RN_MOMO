import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const InfoScreen = (props) => {
  const {store_name, store_address, link, tag, store_latitude, store_longitude} = props.navigation.state.params.item
  pic = ""
  if(link == "https://localhost:3000/logo"){
    pic = require("../../assets/item/res.png")
  } else{
    pic = {uri: link}
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
        <TouchableOpacity onPress={() => props.navigation.navigate('Map', {coordinate: {latitude: store_latitude, longitude: store_longitude}})}>
          <Image
            source={require("../../assets/info/direction.png")}
            style={styles.icon}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity>
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
          <Text style={{marginLeft: 15}}>{tag}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.center, { height: 30, width: 30, marginLeft: 5 }]}>
            <Image
              source={require("../../assets/info/loca.png")}
              style={{ height: 28, width: 28 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{marginLeft: 10}}>{store_address}</Text>
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

export default InfoScreen;
