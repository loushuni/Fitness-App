import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class Setting1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/5.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Select Gender</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting2')}>
                        <Text style={styles.text}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting2')}>
                        <Text style={styles.text}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting2')}>
                        <Text style={styles.text}>Non-Binary</Text>
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