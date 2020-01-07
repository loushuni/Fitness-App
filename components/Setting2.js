import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class Setting2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/6.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Select Goal</Text>
                    <TouchableOpacity >
                        <Text style={styles.text}>Lose Weight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Get Fitter</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: "#2980b6",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 50,
        marginBottom: 200
    },
    text: {
        fontSize: 16,
        padding: 25,
        borderColor: 'white',
        backgroundColor: '#fff',
        color: '#2980b6',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    }
});