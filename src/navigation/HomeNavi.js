import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ExploreScreen from "../screen/ExploreScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: <Image source={require("../../assets/home/exp.png")} />,
        tabBarButtonComponent: TouchableOpacity
      }
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: <Image source={require("../../assets/home/fav.png")} />,
        tabBarButtonComponent: TouchableOpacity
      }
    }
  },
  {
    tabBarOptions: {
        //activeBackgroundColor: "red",
        //inactiveBackgroundColor: "blue",
      style: {
        backgroundColor: "#AE2070",
        borderTopWidth:1,
            borderTopColor:'red'
      },
      showLabel: false
    }
  }
);
