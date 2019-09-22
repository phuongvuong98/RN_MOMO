import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";
import firebase from "firebase";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  ChangeEmail,
  ChangePassword,
  SetLoadingFalse,
  SetLoadingTrue
} from "../Actions";

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
    var firebaseConfig = {
      apiKey: "AIzaSyAkPUsePZZi8P9wsVvm4LP8jAEnMr97yzc",
      authDomain: "topfy-19758.firebaseapp.com",
      databaseURL: "https://topfy-19758.firebaseio.com",
      projectId: "topfy-19758",
      storageBucket: "",
      messagingSenderId: "106866858182",
      appId: "1:106866858182:web:e870836a7ff4242b415fc7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // console.log('begin');
    // users = require('../../push_firebase/data.json')
    // //console.log(users);
    // users.forEach(user => {
    //   firebase.auth().createUserWithEmailAndPassword(user + '@gmail.com', 'macdinh')
    // })
    // console.log('done');\

    //lazy login
    //this.setState({email: '5246190437244883829@gmail.com', pass: 'macdinh'});
    this.props.ChangeEmail("5246190437244883829@gmail.com");
    this.props.ChangePassword("macdinh");
  }

  login = async () => {
    this.props.SetLoadingTrue();
    user = await firebase
      .auth()
      .signInWithEmailAndPassword(this.props.email, this.props.password)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        //var errorMessage = error.message;
        //console.log(errorCode);
        if (
          errorCode === "auth/invalid-email" ||
          errorCode === "auth/user-not-found"
        ) {
          alert("Bạn nhập email không đúng");
        } else if (errorCode === "auth/wrong-password") {
          alert("Bạn nhập sai password!");
        }
        //alert(errorCode);
        // ...
      });
    this.props.SetLoadingFalse();
    if (user) {
      this.props.navigation.navigate("Home", {
        email: email,
        pass: password,
        status: 1
      });
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
      <View
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          alignItems: "center",
          padding: 5
        }}
      >
        <View
          style={{
            width: "100%",
            height: PIC + 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ width: PIC, height: PIC }}>
            <Image source={require("../../assets/login/logo-momo.png")} />
          </View>
        </View>
        <View style={styles.sections}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Nhập email tài khoản"
            onChangeText={input => ChangeEmail(input)}
          />
        </View>
        <View style={styles.sections}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={input => ChangePassword(input)}
            placeholder="Nhập mật khuẩn"
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
                height: 40,
                backgroundColor: "#AE2070",
                borderWidth: 0,
                justifyContent: "center",
                alignItems: "center"
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
      </View>
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
    { ChangeEmail, ChangePassword, SetLoadingFalse, SetLoadingTrue },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
