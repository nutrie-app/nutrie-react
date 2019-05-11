import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { ImageBackground, Image, StyleSheet } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';

const ChooseViewPresent = props => {
  const { onCardPress } = props;
  return (
    <Container>
      <Grid>
        <Row size={20} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.card}>What do you want to avoid?</Text>
        </Row>
        <Row size={20}>
          <Col size={1}>
            <Card>
              <CardItem button cardBody onPress={onCardPress}>
                <ImageBackground
                  source={require('../../../assets/imgs/sugar.jpg')}
                  style={styles.image}
                >
                  <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
                    Sugar
                  </Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <CardItem cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/garlic.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}> FODMAPs </Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row size={20}>
          <Col size={1}>
            <Card>
              <CardItem cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/milk.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}> Lactose </Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <CardItem cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/nuts.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}> Nuts </Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row size={20}>
          <Col size={1}>
            <Card>
              <CardItem cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/cows.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}> Meat </Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <CardItem cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/custom.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}> Custom </Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {},
  image: { height: 200, width: null, flex: 1 },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
  },
});

export default ChooseViewPresent;
