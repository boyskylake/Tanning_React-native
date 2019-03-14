import React, { Component } from 'react';
import { View, Text, TextInput,Alert,Button, TouchableHighlight,Image } from 'react-native';

export default class workshop10 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton(){
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={{padding: 10, flex: 1,flexDirection: 'column' ,justifyContent: 'center',}}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="blue">
            <Image resizeMode="center" source={require('./img/pic.jpg')} style={{width:300,height:70, marginTop: 20 }}/>
          </TouchableHighlight>
      </View>
    );
  }
}
