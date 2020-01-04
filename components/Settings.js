import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Select Gender</Text>
                <TouchableOpacity >
                    <Text style={styles.text}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Non-Binary</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: "black",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 50,
        marginBottom: 250
    },
    text: {
        fontSize: 16,
        padding: 25,
        borderColor: 'white',
        backgroundColor: '#fff',
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }
});