import React from 'react';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet, Text, Image } from 'react-native';

const ScanViewPresent = props => {
  return (
    <Container>
      <Grid>
        <Row size={10} style={styles.card1}>
          <Text>
            <Text style={styles.titleText}>{props.title}</Text>
          </Text>
        </Row>
        <Row size={65} style={styles.card2}>
          <Text>
            <Text style={styles.titleText}>Scanner</Text>
          </Text>
        </Row>
        <Row size={10}>
          <Col size={20} style={styles.card3}>
            <Text>
              <Text style={styles.titleText}>Toggle button</Text>
            </Text>
          </Col>
        </Row>
        <Row size={15} style={styles.card4}>
          <Text>
            <Text style={styles.titleText}>Confirm button</Text>
          </Text>
        </Row>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  card1: {
    backgroundColor: '#71ece2',
  },
  card2: {
    backgroundColor: '#aa76fd',
  },
  card3: {
    backgroundColor: '#86f275',
  },
  card4: {
    backgroundColor: '#ff90b7',
  },
  titleText: {},
});

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../../assets/logo/Nutrie_loggo_vit.svg')}
        style={{ width: 60, height: 20 }}
      />
    );
  }
}

export default ScanViewPresent;
