import React, { Component } from 'react';
import { Text, Layout, BottomNavigation, BottomNavigationTab, Icon, Input, Button } from '@ui-kitten/components';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import ModalWithBackdrop from './ModalWithBackdrop';
import ValidationComponent from 'react-native-form-validator';
import axios from './AxiosConfig';
import firebase from './FirebaseConfig';

export default class Profile extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            gender: '',
            goal: '',
            birthday: '',
            height: '',
            heightUnit: '',
            weight: '',
            weightUnit: '',
            bmi: '',
            tdee: '',
            macro: '',
            onerm: ''
        }
    };

    componentDidMount = () => {
        var userId = firebase.auth().currentUser.uid;
        var s = firebase.database().ref('users/' + userId);
        s.on('value', function (snapshot) {
            const data = snapshot.val();
            this.setState({ email: data.email, gender: data.gender, goal: data.goal, birthday: data.birthday, height: data.height, heightUnit: data.heightUnit, weight: data.weight, weightUnit: data.weightUnit, bmi: data.bmi, tdee: data.tdee, macro: data.macro, onerm: data.onerm });
        }.bind(this));
    }

    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.profilePhoto}>Profile Photo Here</Text>
                <ScrollView>
                    <Text style={styles.header}>Profile</Text>
                    <View style={styles.elementContainer}>
                        <View style={styles.element}>
                            <Text style={styles.text}>First Name</Text>
                            <Input placeholder='First Name' style={styles.input} textStyle={styles.inputText} />
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>Last Name</Text>
                            <Input placeholder='Last Name' style={styles.input} textStyle={styles.inputText} />
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>Email</Text>
                            <Input placeholder='Email' style={styles.input} textStyle={styles.inputText} onChangeText={(email) => this.setState({ email: email })} value={this.state.email} />
                        </View>
                        <ModalWithBackdrop option={this.state.gender} name='Gender' element='genderElement' />
                        <ModalWithBackdrop option={this.state.goal} name='Goal' element='goalElement' />
                        <ModalWithBackdrop option={this.state.birthday} name='Birthday' element='birthdayElement' />
                        <ModalWithBackdrop option={this.state.height} unit={this.state.heightUnit} name='Height' element='heightElement' />
                        <ModalWithBackdrop option={this.state.weight} unit={this.state.weightUnit} name='Weight' element='weightElement' />
                    </View>
                    <Text style={styles.header}>Fitness Calculators</Text>
                    <View style={styles.elementContainer}>
                        <View style={styles.element}>
                            <Text style={styles.text}>BMI</Text>
                            <Text>{this.state.bmi}</Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>TDEE</Text>
                            <Text>{this.state.tdee}</Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>Macro</Text>
                            <Text>{this.state.macro}</Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>1RM</Text>
                            <Text>{this.state.onerm}</Text>
                        </View>
                    </View>
                </ScrollView>
                <BottomNavigationWithIconsShowcase style={styles.bottomTabs} />
            </Layout>
        );
    }
}

const BottomNavigationWithIconsShowcase = () => {

    const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

    return (
        <Layout>
            <BottomNavigation
                style={styles.bottomNavigation}
                selectedIndex={bottomSelectedIndex}
                onSelect={setBottomSelectedIndex}>
                <BottomNavigationTab title='Discover' icon={Icon1} />
                <BottomNavigationTab title='Feed' icon={Icon2} />
                <BottomNavigationTab title='Train' icon={Icon3} />
                <BottomNavigationTab title='Calendar' icon={Icon4} />
                <BottomNavigationTab title='Profile' icon={Icon5} />
            </BottomNavigation>
        </Layout>
    );
};

const Icon1 = (style) => (
    <Icon style={styles.icon} name='search' />
);

const Icon2 = (style) => (
    <Icon style={styles.icon} name='user-friends' />
);

const Icon3 = (style) => (
    <Icon style={styles.icon} name='bicycle' />
);

const Icon4 = (style) => (
    <Icon style={styles.icon} name='calendar-alt' />
);

const Icon5 = (style) => (
    <Icon style={styles.icon} name='user' />
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    elementContainer: {
        flex: 0.8,
        flexDirection: 'column'
    },
    profilePhoto: {
        flex: 0.19,
        textAlign: 'center',
        marginTop: 50,
        paddingTop: 50,
        paddingBottom: 30
    },
    bottomTabs: {
        flex: 0.01,
        textAlign: 'center',
        marginBottom: 10,
        marginVertical: 8
    },
    icon: {
        width: '90%'
    },
    element: {
        width: '100%',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 0,
        backgroundColor: '#2E3A59'
    },
    text: {
        width: '50%',
        paddingTop: 15,
        paddingLeft: 20,
        fontWeight: '500'
    },
    input: {
        width: '50%',
        paddingTop: 2,
        marginTop: 2.5,
        borderColor: '#2E3A59',
        height: 50,
        backgroundColor: '#2E3A59'
    },
    inputText: {
        textAlign: 'right',
        color: '#8F9BB3'
    },
    lastButton: {
        alignSelf: 'stretch',
        borderWidth: 1,
        height: 50,
        borderColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: '#2E3A59'
    },
    header: {
        fontWeight: 'bold',
        paddingLeft: 20,
        marginTop: 30,
        marginBottom: 5
    },
    button: {
        width: '100%',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 0,
        backgroundColor: '#2E3A59',
        borderColor: '#101426',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    }
});
