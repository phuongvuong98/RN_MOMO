import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
  ImageBackground,
  Platform
} from "react-native";
import Constants from "expo-constants";
import firebase from "firebase";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  ChangeEmail,
  ChangePassword,
  SetLoadingFalse,
  SetLoadingTrue,
  SetLocation,
  SetMerchants
} from "../Actions";

import { Fumi } from "react-native-textinput-effects";
import Zocial from "react-native-vector-icons/Zocial";
import Ionicons from "react-native-vector-icons/Ionicons";

const PIC = Dimensions.get("window").width / 2;

class Auth extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Initialize Firebase
    // var firebaseConfig = {
    //   apiKey: "AIzaSyAkPUsePZZi8P9wsVvm4LP8jAEnMr97yzc",
    //   authDomain: "topfy-19758.firebaseapp.com",
    //   databaseURL: "https://topfy-19758.firebaseio.com",
    //   projectId: "topfy-19758",
    //   storageBucket: "",
    //   messagingSenderId: "106866858182",
    //   appId: "1:106866858182:web:e870836a7ff4242b415fc7"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

    // console.log('begin');
    // users = require('../../push_firebase/data.json')
    // //console.log(users);
    // users.forEach(user => {
    //   firebase.auth().createUserWithEmailAndPassword(user + '@gmail.com', 'macdinh')
    // })
    // console.log('done');\

    //lazy login
    //this.setState({email: '5246190437244883829@gmail.com', pass: 'macdinh'});
    this.props.ChangeEmail("8159657106479438377@gmail.com");
    this.props.ChangePassword("macdinh");
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    //console.log(location);
    this.props.SetLocation(location);
  };

  login = async () => {
    this.props.SetLoadingTrue();
    //console.log(status);


    userID = email.slice(0, email.length - "@gmail.com".length);
    //console.log(userID);
    res = await fetch(
      "https://limitless-chamber-64175.herokuapp.com/?all=1&kind=&user_id=" + userID
    );
    //console.log(res);
    //res_json = JSON.parse(res);
    res_json = await res.json();

    //console.log(res_json);


    if (0) {
      alert("Không thể đăng nhập, kiểm tra lại email và password của bạn");
      this.props.SetLoadingFalse();
    } else {
      if (Platform.OS === "android" && !Constants.isDevice) {
        console.log(
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
        );
      } else {
        await this._getLocationAsync();
      }
      
      this.props.SetLoadingFalse();
      this.props.SetMerchants(res_json)
      this.props.navigation.navigate("Home");
    }
  };

  render() {
    const {
      password,
      email,
      loading,
      ChangeEmail,
      ChangePassword
    } = this.props;
    return (
      <ImageBackground
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          alignItems: "center",
          padding: 5
        }}
        source={require("../../assets/login/288776-full_10-new-hd-white-gradient-background-full-hd-1920-1080-for-pc.jpg")}
      >
        <View
          style={{
            width: "100%",
            height: PIC + 10,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <View>
            <Image
              style={{ width: PIC , height: PIC  }}
              source={require("../../assets/logo.png")}
              resizeMode='contain'
            />
          </View>
        </View>
        <View style={styles.sections}>
          {/* <TextInput
            style={styles.input}
            value={email}
            placeholder="Nhập email tài khoản"
            onChangeText={input => ChangeEmail(input)}
          /> */}
          <Fumi
            label={"Nhập email tài khoản"}
            iconClass={Zocial}
            iconName={"email"}
            iconColor={"#AE2070"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            style={{ width: "100%", borderRadius: 5 }}
            value={email}
            onChangeText={input => ChangeEmail(input)}
            inputStyle={{ fontSize: 15 }}
          />
        </View>
        <View style={styles.sections}>
          {/* <TextInput
            style={styles.input}
            value={password}
            onChangeText={input => ChangePassword(input)}
            placeholder="Nhập mật khau"
            secureTextEntry
          /> */}
          <Fumi
            label={"Nhập mật khuẩn"}
            iconClass={Ionicons}
            iconName={"ios-key"}
            iconColor={"#AE2070"}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            style={{ width: "100%", borderRadius: 5 }}
            value={password}
            onChangeText={input => ChangePassword(input)}
            inputStyle={{ fontSize: 15 }}
            secureTextEntry
          />
        </View>
        <View style={styles.sections}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#AE2070",
                borderWidth: 0,
                justifyContent: "center",
                alignItems: "center",
                padding: 12,
                borderRadius: 5
              }}
              onPress={this.login}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
              >
                ĐĂNG NHẬP
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={[styles.sections, { paddingTop: 10 }]}
          onPress={() => this.props.navigation.navigate("Pass")}
        >
          <Text style={{ fontStyle: "italic" }}>Quên mật khuẩn?</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  sections: {
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "center"
  }
});

mapStateToProps = state => {
  return ({ password, email, loading } = state);
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ChangeEmail,
      ChangePassword,
      SetLoadingFalse,
      SetLoadingTrue,
      SetLocation,
      SetMerchants
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
