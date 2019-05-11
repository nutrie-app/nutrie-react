import React from 'react';
import ChooseViewPresent from './ChooseViewPresent';

export default class ChooseViewContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  static navigationOptions = {
    title: 'Pick what you want to avoid',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ChooseViewPresent
        onCardPress={() =>
          navigate('Config', {
            itemId: 2,
            title: 'Config',
          })
        }
      />
    );
  }
}
