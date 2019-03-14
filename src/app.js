import React, { Component } from 'react';
import { View, Text, FlatList, Image, ImageBackground, StyleSheet, Button } from 'react-native';

import {fetchData} from './actions';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: [],
        //     isFetching: false,
        //     isError: false
        // };
    }

    // fetchData() {
    //     console.log('====================================');
    //     console.log('Loading...');
    //     console.log('====================================');
    //     this.setState((oldstate) => {
    //         return {
    //             isFetching: true,
    //             data: []
    //         }
    //     });

    //     loadData()
    //         .then(result => {
    //             console.log('====================================');
    //             console.log('Succes....', JSON.stringify(result));
    //             console.log('====================================');
    //             this.setState((oldstate) => {
    //                 return {
    //                     isFetching: false,
    //                     data: result
    //                 }
    //             })
    //         })
    // }

    render() {

        props = this.props;

        return (
            <View>
                <Text> componentText </Text>
                <Button title='Load' onPress={() => props.fetchData()}></Button>
                <View>
                    {
                        props.fetchReducer.isFetching && <Text>Loading...</Text>
                    }
                    {
                        !props.fetchReducer.isFetching && props.fetchReducer.data.length ? (
                            props.fetchReducer.data.map((person, i) => {
                                return (
                                    <View key={i}>
                                        <Text>{person.userId}</Text>
                                        <Text>{person.id}</Text>
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

// Used to add reducer's stage into the props
const mapStateToProps = (state) => ({
    fetchReducer: state.fetchReducer
});

// Used to add action (dispatch) into the props
const mapDispatchToProps = {fetchData};

// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App)
