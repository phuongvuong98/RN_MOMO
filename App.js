import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Button} from "react-native";
import * as Font from "expo-font"; // expo install expo-font
import axios from 'axios';

import Header from "./components/Header";
import TitleText from "./components/TitleText";
import HomeScreen from "./screens/HomeScreen";
import ImageOriginScreen from "./screens/ImageOriginScreen";

import { Asset, AppLoading } from "expo";


import * as ImagePicker from 'expo-image-picker';

const fetchFonts = async () => {
  await Font.loadAsync({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [image, setImage] = useState();

  if (!dataLoaded) {
    console.log("Loading font ...");
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const handleImage = async () => {
    console.log("Choose image:", image);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {
      console.log("TCL: handleImage -> image", result.uri);
      setImage(result.uri);
    }
  }

  const handleOnRestart = () => {
    console.log("Reset start ...");
    setImage(null);
  }

  // var content = (<HomeScreen chooseImage={handleImage} resetState={handleResetState}></HomeScreen>);
  // var content = (<HomeScreen chooseImage={handleImage} ></HomeScreen>);
  // if (image) {
  //   console.log(image);
  //   content = (<ImageOriginScreen imageUri={image} onRestart={handleOnRestart}></ImageOriginScreen>);
  // } else {
  //   content = (<HomeScreen chooseImage={handleImage} ></HomeScreen>);
  // }


  return (
    <View style={styles.screen}>
      <Header title="Momo" />
      {/* {content} */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
