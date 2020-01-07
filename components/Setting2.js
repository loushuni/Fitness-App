import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class Setting2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/6.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Select Goal</Text>
                    <View style={styles.button}>
                        <TouchableOpacity >
                            <Text style={styles.text}>Lose Weight</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Get Fitter</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 50,
        marginBottom: 200
    },
    text: {
        fontSize: 16,
        borderColor: 'white',
        backgroundColor: '#fff',
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        paddingTop: 12,
        textAlign: 'center',
        width: '85%',
        alignSelf: 'center',
        height: 45,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    button: {
        paddingTop: 180
    }
});