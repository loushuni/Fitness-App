import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default class EmailSignup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/12.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Sign Up A New Account</Text>
                    <TextInput style={styles.input} placeholder="Username" />
                    <TextInput style={styles.input} placeholder="Password" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Sign Up</Text>
                    </TouchableOpacity>
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
        paddingBottom: 150
    },
    input: {
        fontSize: 18,
        height: 40,
        backgroundColor: 'rgba(225,225,225,1)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        textAlign: 'center',
        width: '50%',
        alignSelf: 'center'
    },
    button: {
        padding: 15,
        width: '45%',
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        color: '#fff',
        fontWeight: '700',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    }
});