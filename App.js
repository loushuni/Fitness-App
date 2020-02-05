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
import EmailSignup from './components/EmailSignup';
import BMI from './components/BMI';
import TDEE from './components/TDEE';
import Macro from './components/Macro';
import OneRM from './components/OneRM';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { IconsPack } from './components/Icons';
import Profile from './components/Profile';

const RootStack = createStackNavigator(
  {
    Slider: Slider,
    Login: Login,
    Setting1: Setting1,
    Setting2: Setting2,
    Setting3: Setting3,
    Setting4: Setting4,
    Setting5: Setting5,
    Signup: Signup,
    EmailSignup: EmailSignup,
    Profile: Profile,
    BMI: BMI,
    TDEE: TDEE,
    Macro: Macro,
    OneRM: OneRM
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
    return (
      <React.Fragment>
        <IconRegistry icons={IconsPack} />
        <ApplicationProvider mapping={mapping} theme={darkTheme}>
          <AppContainer />
        </ApplicationProvider>
      </React.Fragment>
    );
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
