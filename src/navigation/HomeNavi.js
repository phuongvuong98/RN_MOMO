import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ExploreScreen from "../screen/ExploreScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import InfoNavi from '../navigation/InfoNavi';
import { createBottomTabNavigator } from "react-navigation-tabs";

import { FontAwesome } from "@expo/vector-icons";

export default createBottomTabNavigator(
  {
    Explore: {
      screen: InfoNavi,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({tintColor}) => <FontAwesome name="wpexplorer" color={tintColor} size={32}/>,
        tabBarButtonComponent: TouchableOpacity
      }
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({tintColor}) => <FontAwesome name="heart-o" color={tintColor} size={32}/>,
        tabBarButtonComponent: TouchableOpacity
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#AE2070",
      inactiveTintColor: "grey",
      //inactiveBackgroundColor: "blue",
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "pink"
      },
      tabBarSelectedItemStyle: {
    },
      showLabel: false
    }
  }
);
