import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PressableIcon from './PressableIcon';
import { Container } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ChooseViewPresent = () => {
    return (

        <Container>
            <Grid>
                <Row size={20} style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.card1} >Set your diet</Text>
                </Row>
                <Row size={20}>
                    <Col size={1}>
                        <PressableIcon iconName='carrot' />
                    </Col>
                    <Col size={1}>
                        <PressableIcon iconName='food-apple' /> 
                    </Col>
                </Row>
                <Row size={20}>
                    <Col size={1} >
                        <PressableIcon iconName='carrot' />
                    </Col>
                    <Col size={1} >
                        <PressableIcon iconName='carrot' />
                    </Col>
                </Row>
                <Row size={20}>
                    <Col size={1} >
                        <PressableIcon iconName='carrot' />
                    </Col>
                    <Col size={1} >
                        <PressableIcon iconName='carrot' />
                    </Col>
                </Row>
                <Row size={20}>
                    <Col size={1} >
                        <PressableIcon iconName='carrot' />
                    </Col>
                    <Col size={1} >
                        <PressableIcon iconName='carrot' />
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

const styles = StyleSheet.create({
    card1: {
        fontSize: 40
    },
    card2: {
        backgroundColor: '#43eb4c'
    },
    card3: {
        backgroundColor: '#abe843'
    },
    card4: {
        backgroundColor: '#4aff87'
    }, card5: {
        backgroundColor: '#fcff4a'
    }
});

export default ChooseViewPresent;