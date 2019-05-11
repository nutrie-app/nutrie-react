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
                  source={require('../../../assets/imgs/sugar.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}>Sugar</Text>
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
                  source={require('../../../assets/imgs/sugar.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}>Sugar</Text>
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
                  source={require('../../../assets/imgs/sugar.jpg')}
                  style={styles.image}
                >
                  <Text style={styles.text}>Sugar</Text>
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
  text: { textAlign: 'center', top: 100, fontSize: 30, color: '#FFFFFF' },
  image: { height: 300, width: '100%', flex: 1 },
});

export default SuggestionViewPresent;
