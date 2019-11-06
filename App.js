import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from "./components/Login";
import Splash from "./components/Splash";
import Start from "./components/Start";
import My from "./components/home/My";
import Guide from "./components/home/Guide";
import KakaoLogin from "./components/KakaoLogin";


const TabNavigator = createBottomTabNavigator(
    {
        My: My,
        Guide: Guide
    },
    {
        defaultNavigationOptions: ({navigation}) => ({

            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = '▲';

                if (routeName === 'My') {
                    icon = '🌈';
                } else if (routeName === 'Guide') {
                    icon = '🌙';
                }

                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return (
                    <Text style={{color: (focused && '#46c3ad') || '#888'}}>{icon}</Text>
                );
            },

        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: '#46c3ad',
            inactiveTintColor: '#888',
        },
    },
);

const AppNavigator = createStackNavigator(
  {
    Splash: Splash,
    Login: Login,
    Start: Start,
    KakaoLogin: KakaoLogin,
    Tab: {screen: TabNavigator, navigationOptions: {header:null}},
  },
  {
    initialRouteName: "Splash"
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
    return (
      <>
        <AppContainer />
      </>
    );
  }
}
