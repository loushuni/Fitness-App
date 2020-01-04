import React from 'react';
import { StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import Setting1 from './components/Setting1';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Slider: Slider,
    Login: Login,
    Setting1: Setting1
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
