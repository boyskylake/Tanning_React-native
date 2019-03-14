import React, { Component } from 'react';
import { View, Text, TextInput,Alert,Button, TouchableHighlight,Image } from 'react-native';

export default class workshop12 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{padding: 10, flex: 1,flexDirection: 'column' ,justifyContent: 'center',}}>
        <Image resizeMode="center" source={require('./img/pic.jpg')} style={{width:undefined,height:100}}/>
        <Image resizeMode="center"
         style={{width:undefined,height:100}}
         source={{uri:'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/15/Pictures/_0d193ca4-d07a-11e8-b4cf-7c02492d3b0a.jpg'}}/>
      </View>
    );
  }
}
