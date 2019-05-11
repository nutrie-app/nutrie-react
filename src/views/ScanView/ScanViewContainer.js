/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Modal, Text, TouchableHighlight } from 'react-native';
import { Button } from 'native-base';
import ScanViewPresent from './ScanViewPresent';

const getEas13Info = identifier => {
  const dataArray = {
    5000112637939: { id: '5000112637939', title: 'Cola Zero', sugar: '0', recommended: [] },
    7311672270251: {
      id: '7311672270251',
      title: 'Smakis Päron',
      sugar: '10.5g',
      recommended: [5000112637939, 7350068291210],
    },
    7350068291210: { id: '7350068291210', title: 'Cola Zero', sugar: '0', recommended: [] },
  };
  return dataArray[identifier];
};

export default class ScanViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScanned: false,
      isModalVisible: true,
      modalText: '',
    };
  }

  render() {
    return (
      <View>
        <ScanViewPresent
          handleOnBarCodeRead={this._handleOnBarCodeRead}
          isScanned={this.state.isScanned}
        />
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.isModalVisible}
          onRequestClose={() => {}}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text style={{ backgroundColor: 'black' }}>{this.state.modalText}</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ isModalVisible: !this.state.isModalVisible });
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  _handleOnBarCodeRead = obj => {
    const { data: eas13 } = obj;
    const info = getEas13Info(eas13);

    this.setState({
      isScanned: true,
    });
  };

  /**
   *
   */
  _handleOnButtonPress = () => {};

  /**
   *
   */
  _handleOnTogglePress = () => {};
}
