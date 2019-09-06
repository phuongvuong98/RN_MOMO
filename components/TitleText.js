import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleText = props => {
    return (
        <Text style={{...styles.title, ...props.style}}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 18,
    fontFamily: "open-sans-bold"
  }
});

export default TitleText;
