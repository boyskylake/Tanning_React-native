/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



// type Props = {};
export default class Component1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: "write" }}>
        <Mytext messenger="Welcome to react-native" option="1234" test="React-native"></Mytext>
      </View>
    );
  }
}

class Mytext extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Text style={{ textAlign: "center", fontSize: 30, color: "red" }}>
        Testing {this.props.test}
        {/* {this.props.option} */}
        </Text>
        );
  }
}