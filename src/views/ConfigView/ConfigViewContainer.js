import React from 'react';
import ConfigViewPresent from './ConfigViewPresent';

export default class ConfigViewContainer extends React.Component {
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
      />
    );
  }
}
