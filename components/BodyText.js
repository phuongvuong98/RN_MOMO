import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyText = props => {
    return (
        <Text style={{...styles.body, ...props.style}}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-bold'
    }
});

export default BodyText;
