import React from 'react';
import ChooseViewContainer from './src/views/ChooseViewContainer';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Choose: {screen: ChooseViewContainer},
});

const App = createAppContainer(MainNavigator);

export default App