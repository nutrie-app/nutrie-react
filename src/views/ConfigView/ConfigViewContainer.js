import React from 'react';
import { Image, View } from 'react-native';
import { Font } from 'expo';
import ConfigViewPresent from './ConfigViewPresent';

export default class ConfigViewContainer extends React.Component {
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
            sugar: this.state.sliderValue
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
