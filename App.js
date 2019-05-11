import React from 'react';
import ScanViewContainer from './src/views/ScanViewContainer';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Scan: {screen: ScanViewContainer},
});

const App = createAppContainer(MainNavigator);

export default App