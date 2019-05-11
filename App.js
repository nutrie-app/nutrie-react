import React from 'react';
import ChooseViewContainer from './src/views/ChooseView/ChooseViewContainer';
import ScanViewContainer from './src/views/ScanView/ScanViewContainer';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Choose: {screen: ChooseViewContainer},
  Scan: {screen: ScanViewContainer},
});

const App = createAppContainer(MainNavigator);

export default App