import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

export default class Setting1 extends Component {
    state = {
        gender: 'gender'
    }

    onPressed = (gender) => {
        this.setState({ gender: gender });
        this.props.navigation.navigate('Setting2');
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/5.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Select Gender</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.onPressed('Female')}
                            textStyle={styles.text}
                            style={styles.button}>
                            Female
                        </Button>
                        <Button
                            onPress={() => this.onPressed('Male')}
                            textStyle={styles.text}
                            style={styles.button}>
                            Male
                        </Button>
                        <Button
                            onPress={() => this.onPressed('Non-Binary')}
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
    container: {
        flex: 1
    },
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 27,
        marginTop: 80,
        marginBottom: 200,
        paddingTop: 10
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
        marginTop: 170,
        alignItems: 'center'
    },
    button: {
        margin: 10,
        height: '16%',
        width: '85%'
    }
});