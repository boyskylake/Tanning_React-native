import React, { Component } from 'react';
import { View, Text, TextInput,Alert,Button, TouchableHighlight,Image } from 'react-native';

export default class workshop11 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this._onPressButton = this._onPressButton.bind(this);
  }
  _onPressButton(){
    this.setState(oldstate => {
      return {text: !oldstate.text}
    })
  }
  clickarrow = () => {
    this.setState(oldstate => {
      return {text: !oldstate.text}
    })
  }
  clickmebuilding(){
    this.setState(oldstate => {
      return {text: !oldstate.text}
    })
  }

  render() {
    return (
      <View style={{padding: 10, flex: 1,flexDirection: 'column' ,justifyContent: 'space-evenly',}}>
        <Button
          title={this.state.text ? "active" : "Isactive"}
          onPress={this._onPressButton}
        />
        <Button
          title={this.state.text ? "active" : "Isactive"}
          onPress={this.clickarrow}
        />
        <Button
          title={this.state.text ? "active" : "Isactive"}
          onPress={this.clickmebuilding.bind(this)}
        />
      </View>
    );
  }
}
