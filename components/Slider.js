import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Slides from './Slides';

export default class Slider extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Slides />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={styles.text}>Let's Get Started!</Text>
                </TouchableOpacity>
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="I already have an account" />
            </View>
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
    text: {
        fontSize: 16,
        borderWidth: 20,
        padding: 30,
        borderColor: 'white',
        backgroundColor: '#7EB3FF',
        color: 'white',
        fontWeight: 'bold',
    }
});
