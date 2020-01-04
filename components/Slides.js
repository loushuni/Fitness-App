import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_App: false
    };
  }

  onDone = () => {
    this.setState({ show_App: true });
  }

  render() {
    if (this.state.show_App) {
      return (
        <View style={styles.mainapp}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#333' }}>
            Main Fitness App
          </Text>
        </View>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.onDone}
          showSkipButton={false}
          bottomButton={false}
          showPrevButton={true}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  image: {
    width: 650,
    height: 650,
    resizeMode: 'contain',
  }
});

const slides = [
  {
    key: 's1',
    title: 'Title 1',
    text: 'Workout Tracking',
    image: require('../assets/1.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: 'transparent',
  },
  {
    key: 's2',
    title: 'Title 2',
    text: 'Expert Advice and Detailed Instruction',
    image: require('../assets/2.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: 'transparent',
  },
  {
    key: 's3',
    title: 'Title 3',
    text: 'Nutrition & Supplementation Guides',
    image: require('../assets/3.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: 'transparent',
  },
  {
    key: 's4',
    title: 'Title 4',
    text: 'We Have The Right Plan For You',
    image: require('../assets/4.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: 'transparent',
  }
];