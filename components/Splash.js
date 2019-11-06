import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class Splash extends Component {
    static navigationOptions = {
        title :null,
         header :null
    };

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.dispatch({
                type:'Navigation/RESET',
                index:0,
                actions:[{routeName:'Start'}]
            });
        },500);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    klaytogether
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffa035",

    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 42,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#131d41"

    }
});


