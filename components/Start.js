import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import KakaoLogins from "@react-native-seoul/kakao-login";

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}
const logCallback = (log, callback) => {
  console.log(log);
  callback;
};
export default class Start extends Component {
  static navigationOptions = {
    title: null,
    header: null
  };
    state = {
        kakoId: 'ff',

    };
    onLogin = () =>{
        console.log('onLogin');
        this.setState({
            kakoId : 'terry'
        });

      KakaoLogins.login()
          .then(result => {
            console.log(result);
            console.log(result.accessToken);
            logCallback(
                `Login Finished:${JSON.stringify(result)}`,
                // setLoginLoading(false),
            );
            KakaoLogins.getProfile()
                .then(result => {
                  // setProfile(result);
                  logCallback(
                      `Get Profile Finished:${JSON.stringify(result)}`,
                      // setProfileLoading(false),
                  );
                  this.props.navigation.navigate('Tab',{result});
                })
                .catch(err => {
                  logCallback(
                      `Get Profile Failed:${err.code} ${err.message}`,
                      // setProfileLoading(false),
                  );
                });

          })
          .catch(err => {
            if (err.code === 'E_CANCELLED_OPERATION') {
              logCallback(`Login Cancelled:${err.message}`,
                  // setLoginLoading(false)
              );
            } else {
              logCallback(
                  `Login Failed:${err.code} ${err.message}`,
                  // setLoginLoading(false),
              );
            }
          });


    };

  onKakaoLogin = () =>{
    console.log('onKakaoLogin');

    this.props.navigation.navigate('KakaoLogin');

  };

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text1}>klaytogether </Text>
        <Text style={styles.text2}> Gather up & save klaytn together</Text>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.formButtonStyle} onPress={this.onLogin}>
            <Text style={styles.text3}>Login with Kakao</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButtonStyle} onPress={this.onKakaoLogin}>
            <Text style={styles.text4}>Sign up with Kakao</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  formButtonStyle: {
    backgroundColor: "#fae100",
    height: 50,
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    borderRadius: 5,
    margin: 5
  },
  text1: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 35,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    color: "#131d41",
    marginTop: 100
  },
  text2: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "center",
    color: "#131d41"
  },
  view1: {
    flex: 1,
    width: 300,
    height: 60
  },

  text3: {
    backgroundColor: "#fae100",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#3c1e1e"
  },
  text4: {
    backgroundColor: "#fae100",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#3c1e1e"
  }
});
