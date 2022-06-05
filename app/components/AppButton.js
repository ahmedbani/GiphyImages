import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import defaultStyles from './config/styles';
export default function AppButton({title, onPress, color = 'orange', onSubmit = () => {}}) {
    const handlePress = () => {
        onPress();
        onSubmit();

    }
    return (
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: color}]} 
        onPress={handlePress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 8,
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})