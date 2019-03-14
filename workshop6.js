import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class workshop6 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style={{flex: 1 , flexDirection:"row", justifyContent: 'space-between', alignItems: 'stretch'}}>
      <View style={{width:50 ,height:50 , backgroundColor: 'powderblue'}} />
      <View style={{width:50 ,height:50 , backgroundColor: 'skyblue'}} />
      <View style={{width:50 ,height:50 , backgroundColor: 'steelblue'}} />
    </View>
    );
  }
}
