import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slides from './Slides';

export default class Slider extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Slides />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={styles.text1}>Let's Get Started!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text2}>I already have an account</Text>
                </TouchableOpacity>
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
    text1: {
        fontSize: 16,
        borderWidth: 10,
        padding: 25,
        borderColor: 'white',
        backgroundColor: '#2980b6',
        color: 'white',
        fontWeight: 'bold',
    },
    text2: {
        color: '#2980b6',
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
        paddingTop: 10,
    }
});
