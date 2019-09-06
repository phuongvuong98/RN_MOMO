import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return (
        // chuyen tat ca props them vao custom components
        <TextInput {...props} style={{...styles.input, ...props.style}}></TextInput>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;
