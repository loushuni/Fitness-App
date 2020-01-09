import React from 'react';
import { StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import Setting1 from './components/Setting1';
import Setting2 from './components/Setting2';
import Setting3 from './components/Setting3';
import Setting4 from './components/Setting4';
import Setting5 from './components/Setting5';
import Signup from './components/Signup';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Slider: Slider,
    Login: Login,
    Setting1: Setting1,
    Setting2: Setting2,
    Setting3: Setting3,
    Setting4: Setting4,
    Setting5: Setting5,
    Signup: Signup
  },
  {
    initialRouteName: 'Slider',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTitleStyle: {
        color: 'transparent'
      }
    }
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
