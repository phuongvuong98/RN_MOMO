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

const PIC = Dimensions.get("window").width / 2;

export default class Auth extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      loading: false
    };
  }

  componentWillMount() {
    // Initialize Firebase
    var firebaseConfig = { //key here
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log('begin');
    users = require('../../push_firebase/data.json')
    //console.log(users);
    users.forEach(user => {
      firebase.auth().createUserWithEmailAndPassword(user + '@gmail.com', 'macdinh')
    })
    console.log('done');
  }

  login = async () => {
    const { email, pass } = this.state;
    this.setState({ loading: true });
    user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        //var errorMessage = error.message;
        //console.log(errorCode);
        if (
          errorCode === "auth/invalid-email" ||
          errorCode === "auth/user-not-found"
        ) {
          alert("Bạn nhập sai email rùi!");
        } else if (errorCode === "auth/wrong-password") {
          alert("Bạn nhập sai password!");
        }
        //alert(errorCode);
        // ...
      });
    this.setState({ loading: false });
      if(user){
        this.props.navigation.navigate('Chat')
      }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Constants.statusBarHeight,
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
            placeholder="Nhập email tài khoản"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.sections}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ name: text })}
            placeholder="Nhập mật khuẩn"
            secureTextEntry
            onChangeText={pass => this.setState({ pass })}
          />
        </View>
        <View style={styles.sections}>
          {this.state.loading ? (
            <ActivityIndicator/>
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
        <TouchableOpacity style={[styles.sections, {paddingTop: 10}]}
          onPress={() => this.props.navigation.navigate('Pass')}
        >
              <Text style={{fontStyle: 'italic'}}>Quên mật khuẩn?</Text>
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
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10
  }
});
