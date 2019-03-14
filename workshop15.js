import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, ImageBackground, StyleSheet } from 'react-native';

class workshop15 extends PureComponent {
  constructor(props) {
    super(props);
    this.getData();
    
    this.state = {
      data:[]
    };
  }
  listhrader() {
    return (
      <View>
        <Image source={require('./img/header.jpg')} resizeMode="contain" style={{ width: '100%', marginBottom: 20, marginTop: 20, }} />
      </View>
    )
  }
  getData() {

    return fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({data: responseJson});
          })
          .catch((error) => {
            console.error(error);
          });
  }

  renderitem(item) {
    return (
      <View style={style.itemstyle}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./img/nasa-logo.webp')} resizeMode="contain" style={{ width: 150, height: 100 }} />
          <View style={{ flexDirection: 'column', paddingTop: 32, }}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        </View>
        <Image source={require('./img/content.jpg')} resizeMode="contain" style={{ width: '100%', height: 200, }} />
      </View>
    )
  }

  render() {
    return (
      <View>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./img/bg.jpg')}>

          <FlatList
            style={{ paddingLeft: 32, paddingRight: 32 }}
            data={this.state.data}
            ListHeaderComponent={this.listhrader}
            renderItem={({ item }) => this.renderitem(item)} />
        </ImageBackground>
      </View>
    );
  }
}

const style = StyleSheet.create(
  {
    itemstyle: { flex: 1, flexDirection: 'column', backgroundColor: 'white', marginBottom: 20, borderRadius: 10, }
  }
)
export default workshop15;
