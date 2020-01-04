import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class Login extends Component {
    render () {
        return (
            <View>
                <TextInput placeholder="Username" />
            </View>
        );
    }
}