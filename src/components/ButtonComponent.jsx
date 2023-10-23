import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonComponent = ({ name, onPress }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onPress(name)}>
                <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirectionz: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#f0f',
        padding: 10,
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default ButtonComponent;
