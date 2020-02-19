import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button, Input } from '@ui-kitten/components';
import firebase from './FirebaseConfig';

export default class EmailSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
    }

    onPressed = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email == "") {
            Alert.alert("Please enter your email address");
        } else if (reg.test(this.state.email) === false) {
            Alert.alert("Please enter a valid email address");
        } else if (this.state.password == "") {
            Alert.alert("Please enter your password");
        } else if (this.state.password.length < 8) {
            Alert.alert("Password must be at least 8 characters long");
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/12.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Sign Up A New Account</Text>
                    <Input placeholder='Enter Your Email Address' style={styles.input} onChangeText={(email) => this.setState({ email })} value={this.state.email} />
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
        marginTop: 40
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