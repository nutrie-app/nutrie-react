import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { font } from 'expo';
import ChooseViewContainer from './src/views/ChooseView/ChooseViewContainer';
import ScanViewContainer from './src/views/ScanView/ScanViewContainer';
import ConfigViewContainer from './src/views/ConfigView/ConfigViewContainer';

const MainNavigator = createStackNavigator(
  {
    Choose: { screen: ChooseViewContainer },
    Config: { screen: ConfigViewContainer },
    Scan: { screen: ScanViewContainer },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#e6e6e6',
      },
    },
  },
  { initialRouteName: 'Choose' }
);

const App = createAppContainer(MainNavigator);

export default App;
