import React from 'react';
import { Grid, Col, Row} from 'react-native-easy-grid';
import { StyleSheet, Text} from 'react-native';

const ConfigViewPresent = (props) => {
    return (
        <Grid>
            <Row size={30} style={styles.card1}>
              <Text>
                <Text style={styles.profileText}>
                  {props.profile}
                </Text>
              </Text>
            </Row> 
            <Row size={50} style={styles.card2}>
              <Text>
                <Text style={styles.profileText}>
                  Slider
                </Text>
              </Text>
            </Row>
            <Row size={20} style={styles.card3}>
              <Text>
                <Text style={styles.profileText}>
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
  
  profileText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ConfigViewPresent;