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

var pic = require('../../assets/info/info_pic.json');

const InfoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: width, height: width }}
        source={require("../../assets/info/place.png")}
        resizeMode="cover"
      />
      <View
        style={[
          { borderBottomWidth: 0.8, borderBottomColor: "gray" },
          styles.center
        ]}
      >
        <Text style={styles.title}>Dominos's Pizza</Text>
        <Text style={styles.title}>Phú Mỹ Hưng</Text>
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
        <TouchableOpacity>
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
          <Text style={{marginLeft: 15}}>Nhà hàng</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.center, { height: 30, width: 30, marginLeft: 5 }]}>
            <Image
              source={require("../../assets/info/loca.png")}
              style={{ height: 28, width: 28 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{marginLeft: 10}}>Quận 7 HCM</Text>
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
