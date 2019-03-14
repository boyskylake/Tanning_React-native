/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
// import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './App';
// import  App from "./component1";
// import  App from "./workshop2";
// import  App from "./workshop3";
// import  App from "./workshop4";
// import  App from "./workshop5";
// import  App from "./workshop6";
// import  App from "./workshop7";
// import  App from "./workshop8";
// import  App from "./workshop9";
// import  App from "./workshop10";
// import  App from "./workshop11";
// import  App from "./workshop12";
// import  App from "./workshop13";
// import  App from "./workshop14";
// import  App from "./workshop15";


// import  App from "./src/app";
// import { Provider } from 'react-redux';
// import configgureStore from './src/configgureStore';

// const store = configgureStore();
// const Reduxapp = () => (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )


import  App from "./workshop_1_basic_nav";

// Use react-redux
// AppRegistry.registerComponent(appName, () => Reduxapp);

AppRegistry.registerComponent(appName, () => App);
