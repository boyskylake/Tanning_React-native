import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';

export default class workshop13 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{padding: 10, flex: 1,flexDirection: 'column'}}>
        <FlatList data={[1,2,3,4]}
        renderItem={({item}) => <Text>{item}</Text>}/>
      </View>
    );
  }
}
