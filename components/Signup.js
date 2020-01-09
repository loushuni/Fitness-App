import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/11.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Great choice! Now get your personal daily plan.</Text>
                    <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('EmailSignup')}>
                        <Text style={styles.buttontext}>Sign Up With Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttontext}>Continue With Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3}>
                        <Text style={styles.buttontext}>Sign Up With Facebook</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>By signing up, I agree to the Terms of Use and Privacy Policy</Text>
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
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 320,
        paddingBottom: 30
    },
    button1: {
        padding: 15,
        width: '85%',
        backgroundColor: 'white',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    button2: {
        padding: 15,
        width: '85%',
        backgroundColor: 'white',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    button3: {
        padding: 15,
        width: '85%',
        backgroundColor: '#3b5998',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontWeight: 'bold',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    bottomText: {
        marginTop: 50,
        color: 'white',
        textAlign: 'center'
    }
});