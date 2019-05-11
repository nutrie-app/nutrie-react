import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ScanViewPresent from './ScanViewPresent';

export default class ScanViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Scan something' };
  }

  static navigationOptions = {
    headerTitle: (
      <Image source={require('../../../assets/nutrie.png')} style={{ width: 83.25, height: 17 }} />
    ),
    headerRight: (
      <MaterialCommunityIcons
        name="barcode-scan"
        size={32}
        color="4c4c4c"
        style={{ paddingRight: 10 }}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScanViewPresent
        title={this.state.title}
        handleOnButtonPress={this._handleOnButtonPress}
        handleOnTogglePress={this._handleOnTogglePress}
      />
    );
  }

  /**
   *
   */
  _handleOnButtonPress = () => {};

  /**
   *
   */
  _handleOnTogglePress = () => {};
}
