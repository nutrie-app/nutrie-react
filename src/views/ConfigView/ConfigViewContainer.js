import React from 'react';
import {Image, View } from 'react-native';
import ConfigViewPresent from './ConfigViewPresent';

export default class ConfigViewContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor() {
    super();
    this.state = {
      sliderValue: 50,
    };
  }

  static navigationOptions = {
    title: 'Configure',
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
      <ConfigViewPresent
        onButtonPress={() =>
          navigate('Scan', {
            itemId: 2,
            title: 'Scan',
          })
        }
        onSliderSlide={this._onSliderSlide}
        sliderValue={this.state.sliderValue}
      />
    );
  }

  _onSliderSlide = value => {
    this.setState(() => {
      return {
        sliderValue: parseFloat(value),
      };
    });
  };
}
