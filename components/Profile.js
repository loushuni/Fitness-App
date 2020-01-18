import React, { Component } from 'react';
import { Text, Layout, BottomNavigation, BottomNavigationTab, Icon, Input, Button, Modal } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Modalla from './Modal';

export default class Profile extends Component {
    changeGenderHandler = () => {
        return (
            Alert.alert('gender')
        );
    }
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.profilePhoto}>Profile Photo Here</Text>
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
                        <Input placeholder='Email' style={styles.input} textStyle={styles.inputText} />
                    </View>
                    <Modalla name='Gender' />
                    <Modalla name='Weight Units' />
                    <Modalla name='Sync with Health App' />
                    <Modalla name='Notifications' />
                    <Modalla name='Log Out' />
                </View>
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
        justifyContent: 'center',
        flexDirection: 'column'
    },
    profilePhoto: {
        flex: 0.19,
        textAlign: 'center',
        marginTop: 50,
        paddingTop: 50
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
        textAlign: 'right'
    },
    lastButton: {
        alignSelf: 'stretch',
        borderWidth: 1,
        height: 50,
        borderColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: '#2E3A59'
    }
});
