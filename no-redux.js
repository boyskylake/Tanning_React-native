import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, ImageBackground, StyleSheet, Button } from 'react-native';
import loadData from './actions/api';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: false,
            isError: false
        };
    }

    fetchData() {
        console.log('====================================');
        console.log('Loading...');
        console.log('====================================');
        this.setState((oldstate) => {
            return {
                isFetching: true,
                data: []
            }
        });

        loadData()
            .then(result => {
                console.log('====================================');
                console.log('Succes....', JSON.stringify(result));
                console.log('====================================');
                this.setState((oldstate) => {
                    return {
                        isFetching: false,
                        data: result
                    }
                })
            })
    }

    render() {
        return (
            <View>
                <Text> componentText </Text>
                <Button title='Load' onPress={}></Button>
                <View>
                    {
                        this.setState.isFetching && <Text>Loading...</Text>
                    }
                    {
                        !this.state.isFetching && this.state.data.length ? (
                            this.state.data.map((person, i) => {
                                return (
                                    <View key={i}>
                                        <Text>{person}</Text>
                                    </View>
                                )
                            })
                        ) : null
                    }
                </View>
            </View>
        );
    }
}

export default App;
