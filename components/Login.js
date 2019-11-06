import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={invalidName}>앱 설명화면 </Text>
                <Text style={layer}>아마곗돈 </Text>
                <View style={rectangle}>
                    <Text style={invalidName2}>카카오톡으로 시작하기 </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const invalidName = {
    width: 193,
    height: 51,
    fontFamily: "Roboto",
    fontSize: 42,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#131d41"
};
const layer = {
    width: 146,
    height: 51,
    fontFamily: "Roboto",
    fontSize: 42,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#131d41",
    marginTop:43,

};

const rectangle = {
    width: 330,
    height: 92,
    backgroundColor: "#ececec",
    marginTop:353
};
const invalidName2 = {
    width: 304,
    height: 41,
    fontFamily: "Roboto",
    fontSize: 34,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#131d41",
    backgroundColor:'red'

};
