/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import { BarCodeScanner } from 'expo';

export default class ModBarCodeScanner extends React.Component {
  _handleBarCodeRead = data => {
    this.props.handleOnBarCodeRead(data);
  };

  render() {
    return (
      <View>
        <BarCodeScanner
          onBarCodeScanned={this.props.isScanned ? undefined : this._handleBarCodeRead}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
    );
  }
}
