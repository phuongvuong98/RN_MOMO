import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import InfoScreen from '../screen/InfoScreen'
import ExploreScreen from '../screen/ExploreScreen'

export default createStackNavigator({
    Explore: {
        screen: ExploreScreen
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
          }
        }
    },
},
{

})