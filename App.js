import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChooseViewContainer from './src/views/ChooseView/ChooseViewContainer';
import ScanViewContainer from './src/views/ScanView/ScanViewContainer';

const MainNavigator = createStackNavigator(
  {
    Choose: { screen: ChooseViewContainer },
    Scan: { screen: ScanViewContainer },
  },
  { initialRouteName: 'Choose' }
);

const App = createAppContainer(MainNavigator);

export default App;
