import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button, Input } from '@ui-kitten/components';
import firebase from './FirebaseConfig';
import axios from './AxiosConfig';

export default class EmailSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", id: 0 };
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
            axios.get('/id.json')
                .then(response => this.setState({ id: response.data }))
                .catch(error => Alert.alert(error));

            // axios.put('/id.json', this.state.id + 1)
            //     .then(console.log('Id Updated Successfully!'))
            //     .catch(error => Alert.alert(error));
            const user = {
                id: this.state.id + 1,
                email: this.state.email,
                gender: this.props.navigation.state.params.gender,
                goal: this.props.navigation.state.params.goal,
                birthday: this.props.navigation.state.params.birthday,
                height: this.props.navigation.state.params.height,
                weight: this.props.navigation.state.params.weight
            }
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    axios.post('/users.json', user)
                        .then(console.log('Data Posted Successfully!'))
                        .catch(error => Alert.alert(error));
                    this.props.navigation.navigate('Profile');
                    Alert.alert("You're successfully signed up!");
                })
                .catch(function (error) {
                    var errorMessage = error.message;
                    Alert.alert(errorMessage);
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/12.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Sign Up A New Account</Text>
                    <Input placeholder='Enter Your Email Address' style={styles.input} onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                    <Input placeholder='Enter Your Password' style={styles.input} onChangeText={(password) => this.setState({ password })} value={this.state.password} secureTextEntry={true} />
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