import React from 'react';
import { Container, Card, CardItem, Text } from 'native-base';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';

const SuggestionViewPresent = props => {
  const {} = props;
  return (
    <Container>
      <Grid>
        <Row size={1}>
          <Col>
            <Card>
              <CardItem button cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/diet_coke.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}>Coca-Cola light 33cl burk</Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row size={1}>
          <Col>
            <Card>
              <CardItem button cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/loka.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}>LOKA citron burk 33cl</Text>
                </ImageBackground>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row size={1}>
          <Col>
            <Card>
              <CardItem button cardBody>
                <ImageBackground
                  source={require('../../../assets/imgs/vega.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}>Vega Shoreline APA</Text>
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
  text: { textAlign: 'center', top: 100, fontSize: 30, color: '#000000', fontWeight: 'bold' },
  image: {height: 300, width: null, flex: 1},
});

export default SuggestionViewPresent;
