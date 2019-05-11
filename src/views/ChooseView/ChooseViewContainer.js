import React from 'react';
import ChooseViewPresent from './ChooseViewPresent';

export default class ChooseViewContainer extends React.Component {
  static navigationOptions = {
    title: 'Set preferences',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ChooseViewPresent
        onCardPress={() =>
          navigate('Scan', {
            itemId: 2,
            title: 'Scan',
          })
        }
      />
    );
  }
}
