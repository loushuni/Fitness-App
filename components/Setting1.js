import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, Layout } from '@ui-kitten/components';

export default class Setting1 extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/5.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Select Gender</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Setting2')}
                            textStyle={styles.text}
                            style={styles.button}>
                            Female
                        </Button>
                        <Button
                            onPress={() => this.props.navigation.navigate('Setting2')}
                            textStyle={styles.text}
                            style={styles.button}>
                            Male
                        </Button>
                        <Button
                            onPress={() => this.props.navigation.navigate('Setting2')}
                            textStyle={styles.text}
                            style={styles.button}>
                            Non-Binary
                        </Button>
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
        marginTop: 80,
        marginBottom: 200
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 16,
        textAlign: 'center',
        width: '85%',
        height: 50,
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        marginTop: 200,
        alignItems: 'center'
    },
    button: {
        margin: 10,
        height: '16%',
        width: '85%'
    }
});