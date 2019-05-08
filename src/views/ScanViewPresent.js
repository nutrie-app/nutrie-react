import React from 'react';
import { Grid, Col, Row} from 'react-native-easy-grid';
import { StyleSheet, Text} from 'react-native';

const ScanViewPresent = (props) => {
    return (
        <Grid>
            <Row size={10} style={styles.card1}>
              <Text>
                <Text style={styles.titleText}>
                  {props.title}
                </Text>
              </Text>
            </Row> 
            <Row size={65} style={styles.card2}>
              <Text>
                <Text style={styles.titleText}>
                  Scanner
                </Text>
              </Text>
            </Row>
            <Row size={10}>
              <Col size={20} style={styles.card3}>
                <Text>
                  <Text style={styles.titleText}>
                    Toggle button
                  </Text>
                </Text>
              </Col>
            </Row>
            <Row size={15} style={styles.card4}>
                <Text>
                  <Text style={styles.titleText}>
                    Confirm button
                  </Text>
                </Text>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
  card1: {
    backgroundColor: '#71ece2'
  },
  card2: {
    backgroundColor: '#aa76fd'
  },
  card3: {
    backgroundColor: '#86f275'
  },
  card4: {
    backgroundColor: '#ff90b7'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScanViewPresent;