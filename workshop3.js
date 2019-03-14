import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class workshop3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>

      <Text style={styles.bigBlue}>Skylake Coding</Text>

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