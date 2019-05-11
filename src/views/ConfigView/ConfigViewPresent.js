import React from 'react';
import {
  ImageBackground,
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Slider,
  Switch,
} from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container } from 'native-base';

const ConfigViewPresent = props => {
  const { onButtonPress, onSliderSlide, sliderValue } = props;
  return (
    <Container style={styles.container}>
      <Grid>
        <Row size={1}>
          <View style={styles.slider}>
            <Text> I want to eat less than </Text>
            <Text> {sliderValue} grams </Text>
            <Slider
              style={{ borderRadius: 50 }}
              step={1}
              maximumValue={100}
              onValueChange={onSliderSlide}
              value={sliderValue}
            />
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.buttonContainer}>
            <Button title="Let's go!" onPress={onButtonPress} />
          </View>
        </Row>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slider: { flex: 1, alignItems: 'stretch', justifyContent: 'center' },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  image: { flex: 1, resizeMode: 'cover' },
});

export default ConfigViewPresent;
