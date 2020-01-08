import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Setting3 extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/8.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Date of Birth</Text>
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
        fontSize: 27,
        marginTop: 50,
        marginBottom: 200
    },
    backgroundImage: {
        width: '100%',
        height: '80%'
    }
});