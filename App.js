import React from 'react'
import LoginNavi from './src/navigation/LoginNavi'
import {createAppContainer} from 'react-navigation'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack'
import Reducers from './src/Reducers/Reducers'

AppNavi =  createAppContainer(LoginNavi)

const App = () => {
    return (
        <Provider store={createStore(Reducers)}>
            <AppNavi/>
        </Provider>
    )
}
export default App
