import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Setting3 extends Component {
    state = {
        date: new Date('2020-01-07'),
    }

    setDate = (event, date) => {
        date = date || this.state.date;
        this.setState({
            date
        });
    }

    render() {
        const { date } = this.state;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/8.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Date of Birth</Text>
                </ImageBackground>
                <View style={styles.datePicker}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Continue</Text>
                    </TouchableOpacity>
                    <DateTimePicker value={date} display="default" onChange={this.setDate} />
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
    datePicker: {
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