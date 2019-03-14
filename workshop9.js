import React, { Component } from 'react';
import { View, Text, TextInput,Alert,Button } from 'react-native';

export default class workshop9 extends Component {
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
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
      </View>
    );
  }
}
