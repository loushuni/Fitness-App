import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Button } from '@ui-kitten/components';

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
                    <Button
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Setting4')}
                        textStyle={styles.buttontext}>
                        Continue
                    </Button>
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
        padding: 10
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
        paddingTop: 18
    },
    buttontext: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 2
    },
    container: {
        flex: 1
    }
}); 