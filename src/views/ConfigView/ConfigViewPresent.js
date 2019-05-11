import React from 'react';
import { ImageBackground, View, Button, Text, StyleSheet, Slider } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Content } from 'native-base';

const ConfigViewPresent = props => {
  const { onButtonPress, onSliderSlide, sliderValue } = props;
  return (
    <Container style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/imgs/sugar-background.jpg')}
        blurRadius={4}
      >
        <Content>
          <Grid style={{ alignContent: 'center' }}>
            <Row size={1} >
              <View>
                <Text style={styles.text}> I want to eat less than </Text>
                <Text style={styles.text}> {sliderValue} grams of sugar</Text>
              </View>
            </Row>
            <Row size={1}>
              <View style={styles.slider}>
                <Slider
                  style={{ borderRadius: 50 }}
                  thumbStyle={styles.sliderTrack}
                  step={1}
                  maximumValue={100}
                  onValueChange={onSliderSlide}
                  value={sliderValue}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#FFFFFF"
                />
              </View>
            </Row>
            <Row size={1} >
              <View style={styles.buttonContainer}>
                <Button color="#4C4C4C" title="Let's do this!" onPress={onButtonPress} style={{height: 500}} />
              </View>
            </Row>
          </Grid>
        </Content>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginBottom: 40,
  },
  slider: { flex: 1, alignItems: 'stretch', justifyContent: 'center' },
  text: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    marginBottom: 20,
    margin: 20,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image: { flex: 1, resizeMode: 'stretch' },
});

export default ConfigViewPresent;
