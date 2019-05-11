import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from 'native-base';
import { Grid, Col, Row} from 'react-native-easy-grid';

const ChooseViewPresent = () => {
    return (
       <Container>
        <Grid>
            <Row size={20} style={styles.card1}></Row> 
            <Row size={80} style={styles.card2}> 
                <Col size={1} style={{backgroundColor: "#a4a4a4"}}></Row>  
                <Col size={1} style={{backgroundColor: "#a3a4a1"}}></Col>  
                <Col size={1} style={{backgroundColor: "#a5a4a2"}}></Col>  
            </Row>
        </Grid>
    </Container> 
    )}

    const styles = StyleSheet.create({
        card1: {
          backgroundColor: '#e1e1e1'
        },
        card2: {
            backgroundColor: '#000'
        },
        card3: {
          backgroundColor: '#436745'
        }
      });

export default ChooseViewPresent;