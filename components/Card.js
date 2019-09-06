import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
    return (
        // hop 2 style lai nha
        <View style={{...styles.card, ...props.style}}>
            {props.children} 
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        // shallow de tao khung boa quanh
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5, // for android
        shadowRadius: 5,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10 // taoj radius cho 1 khung
    }
});

export default Card;
