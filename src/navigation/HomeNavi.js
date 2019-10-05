import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ExploreScreen from "../screen/ExploreScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import InfoScreen from '../screen/InfoScreen';
import CateScreen from '../screen/CateScreen';
import MapScreen from '../screen/MapScreen';
import HistoryScreen from '../screen/HistoryScreen'

import Constants from "expo-constants";

import {connect} from 'react-redux';



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

const contentDrawer = (props) => {
  //console.log(props.point);
  return (
    <View style={{flex: 1, padding: Constants.statusBarHeight, alignItems: 'center'}}>
      <Image
        style={{width: 150, height: 150, marginTop: 20}}
        source={require('../../assets/people.png')}
      />
      <Text style={{fontSize: 16, marginTop: 10}}>ID: {email.slice(0, email.length - "@gmail.com".length)}</Text>
      <Text style={{fontSize: 30, marginTop: 10}}>Tony Nguyễn</Text>
      <Text style={{fontSize: 25, marginTop: 10}}>Điểm thưởng: {point}💫</Text>
    </View>
  )
}

mapStateToProps = (state) => {
  return ({point, email} = state)
}

const contentDrawerRedux = connect(mapStateToProps)(contentDrawer)


const drawerNavi = createDrawerNavigator({
  'Topfy recommendation app': bottomTabNavi,
},
{
  contentComponent: contentDrawerRedux
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
    screen: MapScreen,
    navigationOptions: {
      title: "Bản đồ chỉ đường",
      
      
      headerStyle: {
        backgroundColor: "#AE2070"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    },
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      title: "Lịch sử giao dịch và điểm thưởng",
      
      
      headerStyle: {
        backgroundColor: "#AE2070"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    },
  }

},
{

})