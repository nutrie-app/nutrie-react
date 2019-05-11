import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ImageBackground, Image, StyleSheet } from 'react-native';
import ChooseViewContainer from './src/views/ChooseView/ChooseViewContainer';
import ScanViewContainer from './src/views/ScanView/ScanViewContainer';

const MainNavigator = createStackNavigator(
  {
    Choose: { screen: ChooseViewContainer },
    Scan: { screen: ScanViewContainer },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff694',
      },
    },
  },
  { initialRouteName: 'Choose' }
);

const App = createAppContainer(MainNavigator);

export default App;
