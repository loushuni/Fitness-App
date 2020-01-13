import React, { Component } from 'react';
import { TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, Input } from '@ui-kitten/components';

export default class EmailSignup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/12.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Sign Up A New Account</Text>
                    <Input style={styles.input} placeholder="Username" />
                    <Input style={styles.input} placeholder="Create Password" />
                    <Button
                        style={styles.button}
                        textStyle={StyleSheet.buttonText}>
                        Sign Up
                    </Button>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 60,
        paddingBottom: 150,
        marginTop: 10
    },
    input: {
        height: 40,
        marginBottom: 10,
        padding: 10,
        textAlign: 'center',
        width: '50%',
        alignSelf: 'center'
    },
    button: {
        padding: 15,
        width: '45%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        fontWeight: '700',
        padding: 3
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    }
});