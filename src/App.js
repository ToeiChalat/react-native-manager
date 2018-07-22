/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginFrom from './components/LoginFrom';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCriW81tFjb1H0alNcBpOxCMT6Xcyue2yc',
      authDomain: 'manager-react-native-pratice.firebaseapp.com',
      databaseURL: 'https://manager-react-native-pratice.firebaseio.com',
      projectId: 'manager-react-native-pratice',
      storageBucket: 'manager-react-native-pratice.appspot.com',
      messagingSenderId: '143447365764'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginFrom />
      </ Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
