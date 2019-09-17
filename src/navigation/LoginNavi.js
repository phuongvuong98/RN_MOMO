import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'

import AuthScreen from '../screen/AuthScreen';
import HomeNavi from './HomeNavi';
import PassScreen from '../screen/PassScreen';

const Main = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    
  },
  Home: {
    screen: HomeNavi, 
    navigationOptions: {
      header: null //Hide the stack header
    }
  },
  Pass: {
    screen: PassScreen,
    navigationOptions: {
      title: "Lấy lại mật khuẩu",
      headerStyle: {
        backgroundColor: "#AE2070"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
})

export default Main
