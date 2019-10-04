import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Card = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
      }}
    >
      <View
        style={{
          width: "40%",
          position: "absolute",
          top: 0,
          backgroundColor: "rgb(174,32,112)",
          zIndex: 10,
          padding: 5,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white" }}>HI</Text>
      </View>
      <View
        style={{
          height: (SCREEN_WIDTH - 40) * 0.5,
          width: SCREEN_WIDTH - 40,
          backgroundColor: "#fff",
          borderRadius: 40,
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
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  card: {
    height: (SCREEN_WIDTH - 40) * 0.5,
    width: SCREEN_WIDTH - 40,
    backgroundColor: "#fff",
    borderRadius: 40,
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
  }
});

export default Card;
