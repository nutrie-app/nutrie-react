import React from 'react';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Container, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const ConfigViewPresent = props => {
  const { onButtonPress } = props;
  return (
    <Container>
      <Row size={1}>
        <Button rounded success onPress={onButtonPress} style={styles.button}>
          <Text style={styles.text}> Set your preference </Text>
        </Button>
      </Row>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  button: {
    padding: 10,
    margin: 10,
  },
});

export default ConfigViewPresent;
