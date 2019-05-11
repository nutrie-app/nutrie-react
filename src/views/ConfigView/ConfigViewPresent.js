import React from 'react';
import { StyleSheet, Slider, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Button, Text } from 'native-base';

const ConfigViewPresent = props => {
  const { onButtonPress, onSliderSlide, sliderValue } = props;
  return (
    <Container>
      <Grid>
        <Row size={1}>
          <Text> Let's dodge that sugar! </Text>
        </Row>
        <Row size={1}>
          <View style={styles.slider}>
            <Text> Sugar: {sliderValue} [g] </Text>
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
          <Button rounded success onPress={onButtonPress} style={styles.button}>
            <Text style={styles.text}> Let's go! </Text>
          </Button>
        </Row>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
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
});

export default ConfigViewPresent;
