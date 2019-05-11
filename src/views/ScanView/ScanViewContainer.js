/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React from 'react';
import { Image, View, Modal, Text, TouchableHighlight } from 'react-native';
import { Button, InputGroup } from 'native-base';
import ScanViewPresent from './ScanViewPresent';

const getEas13Info = identifier => {
  const dataArray = {
    '5000112637939': { id: '5000112637939', title: 'Cola Zero', sugar: 0, recommended: [] },
    '7311672270251': {
      id: '7311672270251',
      title: 'Smakis Päron',
      sugar: 20,
      recommended: [5000112637939, 7350068291210],
    },
    '7350068291210': { id: '7350068291210', title: 'Njie', sugar: 0, recommended: [] },
  };
  
  return dataArray[identifier];
};

export default class ScanViewContainer extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    const sugar = navigation.getParam('sugar', undefined)

    this.state = {
      isScanned: false,
      isModalVisible: false,
      modalText: '',
      sugar,
      status: "red"
    };
  }

  static navigationOptions = {
    title: 'Scan',
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
          <View style={{ marginBottom: 20,
                        margin: 20,
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'center' }}>
              <Button style={{width:"100%", height:"100%", backgroundColor: this.state.status, justifyContent: 'center' }} onPress={this._onButtonPress}>
              </Button>
          </View>
        </Modal>
      </View>
    );
  }

  _onButtonPress = () => {
    if(this.state.status == "red"){
    this.setState({ isModalVisible: !this.state.isModalVisible, isScanned: false });

    const { navigate } = this.props.navigation;
    
    navigate('Suggestions', {itemId: 2,
    title: 'Suggestions'})
  } else {
    this.setState({ isModalVisible: !this.state.isModalVisible, isScanned: false });
  }
}

  _handleOnBarCodeRead = obj => {
    const { data: eas13 } = obj;
    const info = getEas13Info(eas13);

    if (info['sugar'] <= this.state.sugar){
    this.setState({
      isScanned: true,
      isModalVisible: true,
      modalText: JSON.stringify(info),
      status: "green"
    })
  }  else {
    this.setState({
      isScanned: true,
      isModalVisible: true,
      modalText: JSON.stringify(info),
      status: "red"
    }) 
  };
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
