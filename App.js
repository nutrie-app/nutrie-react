import React from 'react';
import ConfigViewContainer from './src/views/ConfigViewContainer';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Config: {screen: ConfigViewContainer},
});

const App = createAppContainer(MainNavigator);

export default App