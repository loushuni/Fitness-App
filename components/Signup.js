import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/11.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Great choice! Now get your personal daily plan.</Text>
                    <Button
                        style={styles.button1}
                        onPress={() => this.props.navigation.navigate('EmailSignup')}
                        textStyle={styles.buttonText}>
                        Sign Up With Email
                    </Button>
                    <Button
                        style={styles.button2}
                        textStyle={styles.buttonText}>
                        Continue With Apple
                    </Button>
                    <Button
                        style={styles.button3}
                        textStyle={styles.buttonText}>
                        Sign Up With Facebook
                    </Button>
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
        paddingBottom: 30,
        padding: 10
    },
    button1: {
        padding: 15,
        width: '85%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    button2: {
        padding: 15,
        width: '85%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    button3: {
        padding: 15,
        width: '85%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontWeight: 'bold',
        padding: 3
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