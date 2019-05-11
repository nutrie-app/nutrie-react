import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ScanViewPresent from './ScanViewPresent';

export default class ScanViewContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { title: 'Scan something' };
  }

  static navigationOptions = {
    headerTitle: (
      <MaterialCommunityIcons
        name="barcode-scan"
        size={32}
        color="4c4c4c"
        style={{ paddingRight: 10 }}
      />
    ),
    headerRight: (
      <View
        style={{ paddingRight: 10, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}
      >
        <Image
          source={require('../../../assets/nutrie.png')}
          style={{ width: 83.25, height: 17 }}
        />
      </View>
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
