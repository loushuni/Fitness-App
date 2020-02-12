import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button, Input } from '@ui-kitten/components';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDq6clYfRSGu-I-a_F_QrOmNpizrlDb3so",
    authDomain: "fitness-app-bf0a6.firebaseapp.com",
    databaseURL: "https://fitness-app-bf0a6.firebaseio.com",
    storageBucket: "fitness-app-bf0a6.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
    }

    onPressed = () => {
        // firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });

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
            this.props.navigation.navigate('Profile');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/7.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Fitness App</Text>
                    <Input style={styles.input} placeholder="Email" onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                    <Input style={styles.input} placeholder="Password" onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                    <Button
                        onPress={this.onPressed}
                        style={styles.button}
                        textStyle={styles.buttonText}>
                        Login
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
        paddingBottom: 150
    },
    input: {
        fontSize: 18,
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
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 30
    }
});