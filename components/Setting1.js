import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class Setting1 extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/5.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Select Gender</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting2')}>
                            <Text style={styles.text}>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting2')}>
                            <Text style={styles.text}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting2')}>
                            <Text style={styles.text}>Non-Binary</Text>
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
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    button: {
        marginTop: 220
    }
});