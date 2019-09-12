import React from 'react'
import AuthScreen from './src/screen/Auth';
import ChatScreen from './src/screen/Chat';
import PassScreen from './src/screen/Pass';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

const navi = createStackNavigator({
  Auth: {
    screen: AuthScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Pass: {
    screen: PassScreen
  }
})


export default createAppContainer(navi);