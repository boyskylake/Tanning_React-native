import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class workshop2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>

        <BlinkText messege="textInComponent" interval={1000}/>

      </View>
    );
  }
}


class BlinkText extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible:true
        };
        setInterval(() => {
            this.setState(old =>{
                return {isVisible: !old.isVisible}
            })
        }, this.props.interval);
    }

    render() {
        let display = this.state.isVisible ? this.props.messege : " ";  
        return (
          <Text style={{ textAlign: "center", fontSize: 30, color: "red" }}>
            Testing {display}
            {/* {this.state.isVisible} */}
            </Text>
            );
      }
}