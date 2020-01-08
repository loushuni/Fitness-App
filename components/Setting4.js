import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Picker } from 'react-native';

export default class Setting4 extends Component {
    state = { user: '' }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        const array = ["130", "131", "132", "133", "134", "135", "136"];

        return (
            <View style={styles.container1}>
                <ImageBackground source={require('../assets/9.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Height</Text>
                </ImageBackground>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Setting5')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    <View style={styles.pickerView}>
                        <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={styles.picker}>
                            {array.map((item, index) => {
                                return (< Picker.Item label={item} value={index} key={index} />);
                            })}
                        </Picker>
                        <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={styles.picker}>
                            < Picker.Item label="cm" value="cm" />
                            < Picker.Item label="inch" value="inch" />
                        </Picker>
                    </View>
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
    container1: {
        flex: 1
    },
    container2: {
        flex: 0.7
    },
    button: {
        width: '100%',
        height: 60,
        backgroundColor: '#333333',
        paddingTop: 18
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pickerView: {
        flex: 1,
        flexDirection: 'row'
    },
    picker: {
        flex: 0.5
    }
}); 