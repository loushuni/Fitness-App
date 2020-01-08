import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default class Setting4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/9.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Height</Text>
                </ImageBackground>
                <View style={styles.picker}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Setting5')}>
                        <Text style={styles.buttontext}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 27,
        marginTop: 50,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1.3
    },
    picker: {
        flex: 0.7
    },
    button: {
        width: '100%',
        height: 60,
        backgroundColor: '#333333',
        paddingTop: 18
    },
    buttontext: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        flex: 1
    }
}); 