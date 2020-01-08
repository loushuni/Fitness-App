import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class Setting2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/6.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Choose a Goal</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting3')}>
                            <Text style={styles.text}>Lose Weight</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting3')}>
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
        fontSize: 27,
        marginTop: 50,
        marginBottom: 200
    },
    text: {
        fontSize: 16,
        backgroundColor: '#fff',
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        paddingTop: 14,
        textAlign: 'center',
        width: '85%',
        alignSelf: 'center',
        height: 50,
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
        paddingTop: 200
    }
});