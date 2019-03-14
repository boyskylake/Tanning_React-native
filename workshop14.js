import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, ImageBackground } from 'react-native';

class workshop14 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  listhrader() {
    return (
      <View>
        <Image source={require('./img/header.jpg')} resizeMode="contain" style={{ width: '100%', marginBottom:20 ,marginTop: 20,}} />
      </View>
    )
  }

  renderitem(item) {
    return (
      <View style={{ flex: 1, flexDirection: 'column' , backgroundColor: '#FFFFFF', marginBottom: 20, borderRadius: 10,}}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./img/nasa-logo.webp')} resizeMode="contain" style={{ width: 150, height: 100 }} />
          <View style={{ flexDirection: 'column', paddingTop: 32, }}>
            <Text>Title</Text>
            <Text>Subtitle</Text>
            <Text>{item}</Text>
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
            data={[1, 2, 3, 4]}
            ListHeaderComponent={this.listhrader}
            renderItem={({ item }) => this.renderitem(item)} />
        </ImageBackground>
      </View>
    );
  }
}

export default workshop14;
