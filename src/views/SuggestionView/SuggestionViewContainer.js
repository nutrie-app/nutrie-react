import React from 'react';
import { Image, View } from 'react-native';
import SuggestionViewPresent from './SuggestionViewPresent';

export default class SuggestionViewContainer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  static navigationOptions = {
    title: 'Alternatives',
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
    return <SuggestionViewPresent />;
  }
}
