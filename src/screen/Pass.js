import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import firebase from "firebase";

export default class Pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      loading: false
    };
  }

  static navigationOptions = {
    title: "Lấy lại mật khuẩu",
    headerStyle: {
      backgroundColor: "#AE2070"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  sendMailReset = () => {
    var auth = firebase.auth();
    this.setState({ loading: true });

    console.log("object");

    auth
      .sendPasswordResetEmail(this.state.input)
      .then(function() {
        // Email sent.
        //this.props.navigation.navigate('Auth')
        alert("Đã gửi email reset");
      })
      .catch(function(error) {
        // An error happened.var errorCode = error.code;
        //var errorMessage = error.message;
        //console.log(errorCode);
        errorCode = error.code
        if (errorCode === "auth/invalid-email") {
            alert('Bạn nhập email không đúng');
        }
      });

    this.setState({ loading: false });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          //justifyContent: "center",
          alignItems: "center",
          padding: 10
        }}
      >
        <View style={styles.sections}>
          <TextInput
            style={[styles.input]}
            value={this.state.input}
            onChangeText={input => this.setState({ input })}
            placeholder="Nhập email đã đăng ký"
          />
        </View>
        <View style={styles.sections}>
          {!this.state.loading ? (
            <TouchableOpacity
              style={[
                styles.input,
                {
                  backgroundColor: "#AE2070",
                  alignItems: "center",
                  borderWidth: 0
                }
              ]}
              onPress={this.sendMailReset}
            >
              <Text style={{ fontSize: 25, color: "white" }}>Gửi email</Text>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sections: {
    paddingTop: 30,
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
