import React from 'react';
import ConfigViewPresent from './ConfigViewPresent';

export default class ConfigViewContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  static navigationOptions = {
    title: 'Configure',
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    const { navigate } = this.props.navigation;

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

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
