import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Colors from '../constants/colors';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={100}
          source={require("../assets/init.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View>
        <Button
          title="CHOOSE IMAGE"
          color={Colors.primary}
          onPress={props.chooseImage}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 200,
    height: 200,
    overflow: "hidden", // con cua no o sau
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default HomeScreen;
