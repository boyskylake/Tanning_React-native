import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class workshop4 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>

      <Text style={styles.bigBlue}>Skylake Coding</Text>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});