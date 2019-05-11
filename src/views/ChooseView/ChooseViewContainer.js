import React from 'react';
import {Image, View } from 'react-native';
import ChooseViewPresent from './ChooseViewPresent';

export default class ChooseViewContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  static navigationOptions = {
    title: 'Pick your poison',
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
