import React from 'react';
import { font } from 'expo';
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
