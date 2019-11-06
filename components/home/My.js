import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';



export default class Login extends Component {

    state = {
        address : '',
        token:'',
    };

    componentDidMount() {

        const {params} = this.props.navigation.state;
        const {id} = params.result;
        console.log('componentDidMount:',id);

        this.fetchData(id);
    }
    //adb reverse tcp:3000 tcp:3000
    fetchData = (id) => {
        console.log(id);
        fetch('http://localhost:3000/klaytn/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    kakaoId: id,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                       address : responseJson.address,
                       token : responseJson.token
                    });

                })
                .catch((error) => {
                    console.error(error);
                });
    };



    render() {

        const {params} = this.props.navigation.state;
        const {id, email, profile_image_url: photo, nickanme} = params.result;
        // console.log(params);
        console.log(this.props.navigation.state);
        return (
            <View style={styles.container}>
                <Text style={hiYeahee}>{nickanme}</Text>
                <View style={styles.profile}>
                    <Image style={styles.profilePhoto} source={{uri: photo}} />
                    <Text>{`id : ${id}`}</Text>
                    <Text>{`email : ${email}`}</Text>
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
    profilePhoto: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: 'black',
    },
});


const hiYeahee = {
    // width: 108,
    height: 24,
    // fontFamily: "NunitoSans",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "italic",
    lineHeight: 24,
    letterSpacing: 0,
    color: "#131d41"
};
