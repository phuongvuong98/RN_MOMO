import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ExploreScreen from "../screen/ExploreScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import InfoScreen from '../screen/InfoScreen';
import CateScreen from '../screen/CateScreen';
import MapScreen from '../screen/MapScreen';


import InfoNavi from "../navigation/InfoNavi";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

const bottomTabNavi = createBottomTabNavigator(
  {
    All: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="newspaper-o" color={tintColor} size={32} />
        ),
        tabBarButtonComponent: TouchableOpacity
      }
    },
    Category: {
      screen: CateScreen,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="wpexplorer" color={tintColor} size={32} />
        ),
        tabBarButtonComponent: TouchableOpacity
      }
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="heart-multiple" color={tintColor} size={32} />
        ),
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
      tabBarSelectedItemStyle: {},
      showLabel: false
    }
  }
);

const drawerNavi = createDrawerNavigator({
  Initial: bottomTabNavi
},
{

});

export default MainStack = createStackNavigator({
  Main: {
      screen: drawerNavi,
      navigationOptions: {
        header: null
      }
  },
  Info: {
      screen: InfoScreen,
      navigationOptions: {
        title: "Thông tin chi tiết",
        
        
        headerStyle: {
          backgroundColor: "#AE2070"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        tabBarVisible: false
      },
      
  },
  Map: {
    screen: MapScreen
  }
},
{

})