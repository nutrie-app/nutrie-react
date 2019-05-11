import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const PressableIcon = (props) => {
    return (
        <TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <MaterialCommunityIcons name={props.iconName} size={50} color="#1e1e1e" />
            </View>
        </TouchableOpacity>

    )
}

export default PressableIcon;