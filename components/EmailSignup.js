import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button, Input } from '@ui-kitten/components';

export default class EmailSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
    }

    onPressed = () => {
        if (this.state.username == "") {
            Alert.alert("Please enter your username");
        } else if (this.state.password == "") {
            Alert.alert("Please enter your password");
        } else if (this.state.password.length < 8) {
            Alert.alert("Password must be at least 8 characters long");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/12.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Sign Up A New Account</Text>
                    <Input placeholder='Enter Your Username' style={styles.input} onChangeText={(username) => this.setState({ username })} value={this.state.username} />
                    <Input placeholder='Enter Your Password' style={styles.input} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                    <Button onPress={this.onPressed} textStyle={StyleSheet.buttonText} style={styles.button}>Sign Up</Button>
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
        width: '55%',
        alignSelf: 'center'
    },
    button: {
        width: '50%',
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
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 30
    }
});