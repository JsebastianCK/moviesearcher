import React from 'react';
import Welcome from './components/Welcome';
import Home from './components/Home';
import AppNavigator from './components/AppNavigator';
import { StyleSheet, View, ImageBackground } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}
