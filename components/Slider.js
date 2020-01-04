import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Slides from './Slides';

export default class Slider extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Slides />
                <TouchableOpacity
                    onPress={() => Alert.alert('Button pressed')}>
                    <Text style={styles.text}>Let's Get Started!</Text>
                </TouchableOpacity>
                <Button onPress={() => Alert.alert('Login Page')} title="I already have an account" />
                <Button
                    title="Go to Login Page"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
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
