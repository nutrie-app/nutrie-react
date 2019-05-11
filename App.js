import React from 'react';
import ChooseViewContainer from './src/views/ChooseViewContainer';
import ScanViewContainer from './src/views/ScanViewContainer';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Choose: {screen: ChooseViewContainer},
  Scan: {screen: ScanViewContainer},
});

const App = createAppContainer(MainNavigator);

export default App