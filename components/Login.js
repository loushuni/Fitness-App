import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputcontainer}>
                    <Text style={styles.title}>Fitness App</Text>
                    <TextInput style={styles.input} placeholder="Username" />
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    inputcontainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 35,
        color: '#2980b6',
        fontWeight: 'bold'
    },
    input: {
        fontSize: 18,
        paddingHorizontal:10,
        height: 40,
        backgroundColor: 'rgba(225,225,225,1)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    button: {
        padding: 15,
        width: '45%',
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginTop: 20
    },
    buttontext: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        color: '#fff',
        fontWeight: '700',
    }
});