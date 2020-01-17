import React, { Component } from 'react';
import { Text, Layout, Modal, Button, BottomNavigation, BottomNavigationTab, Icon, Input } from '@ui-kitten/components';
import { View, StyleSheet, Alert, Picker, TouchableHighlight, TextInput, Switch, TouchableOpacity } from 'react-native';

export default class Profile extends Component {

    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.profilePhoto}>Profile Photo Here</Text>
                
                    <View style={styles.elementContainer}>
                        <View style={styles.element}>
                            <Text style={styles.text}>First Name</Text>
                            <TextInput placeholder='First Name' style={styles.input} />
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>Last Name</Text>
                            <TextInput placeholder='Last Name' style={styles.input} />
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.text}>Email</Text>
                            <TextInput placeholder='Email' style={styles.input} />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Gender</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Weight Units</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Sync with Health App</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Log Out</Text>
                        </TouchableOpacity>
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
        height: 45,
        flexDirection: 'row',
    },
    text: {
        width: '50%',
        paddingTop: 10,
        paddingLeft: 20
    },
    input: {
        width: '50%',
        paddingTop: 1,
        textAlign: 'right',
        paddingRight: 20
    },
    button: {
        alignSelf: 'stretch',
        borderWidth: 1,
        height: 45,
        borderColor: 'black'
    }
});
