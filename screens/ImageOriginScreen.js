import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import axios from 'axios';

import Colors from "../constants/colors";

const ImageOriginScreen = props => {
  const [imageNew, setImageNew] = useState();
  const [numFaces, setNumFaces] = useState(0);

  const sendImage = async (imageUri) => {
    console.log("Send image ...", imageUri);
  
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    // let localUri = imageUri.replace("file://", "");
    let localUri = imageUri;
    let filename = localUri.split('/').pop();
    let url = "http://10.0.2.2:3000/image";
  
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "image" is the name of the form field the server expects
    formData.append('image', { uri: localUri, name: filename, type: type });
  
    console.log("TCL: sendImage -> type", type)
    console.log("TCL: sendImage -> filename", filename)
    console.log("TCL: sendImage -> localUri", localUri)
  
  
    // /image?type1=image/jpg&11=123'
    // let uri = "?type=" + type + "&filename=" + filename + "&localUri=" + "http://localhost:8080/" +localUri;  
    
  
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    return await fetch(url, options)
      .then(function(response){ 
        return response.json();   
      })
      .then(function(data){ 
        console.log(data);
        console.log("TCL: sendImage -> data.newUrl", data.newUrl)
        setImageNew(data.newUrl);
        setNumFaces(data.numFaces);
        return data;
      });
  
  
    // return axios.get(uriComp)
    // .then(res => {
    //     console.log("Huhu");
    // })
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
      <Image
        source={{
          uri:
          props.imageUri,
        }}
        style={{ width: '100%', height: 300 }}
      />
      </View>
      
      {
        imageNew && 
        <View style={styles.imageContainer}>
          <Image
          source={{
            uri:
            "http://10.0.2.2:3000" + imageNew,
          }}
          style={{ width: '100%', height: 300 }}
          />
          
          <Text>Found {numFaces} faces! </Text>
        </View>
      }
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button
          title="DETECT FACE"
          color={Colors.primary}
          onPress={() => {
            return sendImage(props.imageUri)
            .then(res => {
              console.log("Send completed!");
            })
          }}
      />
      </View>
      <View style={styles.button}>
      <Button
          title="CHOOSE ANOTHER IMAGE"
          color={Colors.accent}
          onPress={props.onRestart}
      />
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    padding: 10
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: "50%",
    marginVertical: 5,
    color: Colors.primary
  }
});

export default ImageOriginScreen;
