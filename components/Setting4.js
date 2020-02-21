import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Picker } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

export default class Setting4 extends Component {
    state = { number: '52', unit: 'inch' }

    updateNumber = (number) => {
        this.setState({ number: number })
    }

    updateUnit = (unit) => {
        this.setState({ unit: unit })
    }

    onPressed = () => {
        this.props.navigation.navigate('Setting5',
            {
                gender: this.props.navigation.state.params.gender,
                goal: this.props.navigation.state.params.goal,
                birthday: this.props.navigation.state.params.birthday,
                height: this.state.number + ' ' + this.state.unit
            }
        );
    }

    render() {
        let pickerItems = null;
        if (this.state.unit === 'cm') {
            pickerItems = Array.from(Array(121), (_, x) => x).map((item, index) => (
                <Picker.Item label={`${item + 130}`} key={index} value={`${item + 130}`} />));
        } else {
            pickerItems = Array.from(Array(47), (_, x) => x).map((item, index) => (
                <Picker.Item label={`${item + 52}`} key={index} value={`${item + 52}`} />));
        }
        return (
            <View style={styles.container1}>
                <ImageBackground source={require('../assets/9.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Height</Text>
                </ImageBackground>
                <View style={styles.container2}>
                    <Button
                        style={styles.button}
                        onPress={this.onPressed}
                        textStyle={styles.buttonText}>
                        Continue
                    </Button>
                    <View style={styles.pickerView}>
                        <Picker selectedValue={this.state.number} onValueChange={this.updateNumber} style={styles.picker}>
                            {pickerItems}
                        </Picker>
                        <Picker selectedValue={this.state.unit} onValueChange={this.updateUnit} style={styles.picker}>
                            < Picker.Item label="inch" value="inch" />
                            < Picker.Item label="cm" value="cm" />
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
        marginTop: 80,
        padding: 10
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
        paddingTop: 18
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 3
    },
    pickerView: {
        flex: 1,
        flexDirection: 'row'
    },
    picker: {
        flex: 0.5
    }
}); 