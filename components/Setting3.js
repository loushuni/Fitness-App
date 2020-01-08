import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
            <View>
                <ImageBackground source={require('../assets/8.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Date of Birth</Text>
                </ImageBackground>
                <Button onPress={this.datepicker} title="Show date picker!" />
                <DateTimePicker
                    value={date}
                    display="default"
                    onChange={this.setDate}
                />
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
        height: '75%'
    }
}); 