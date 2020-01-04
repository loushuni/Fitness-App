import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import Settings from './components/Settings';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Slider: Slider,
    Login: Login,
    Settings: Settings
  },
  {
    initialRouteName: 'Slider',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
