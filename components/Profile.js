import React, { Component } from 'react';
import { Text, Layout, BottomNavigation, BottomNavigationTab, Icon, Input, Button } from '@ui-kitten/components';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import ModalWithBackdrop from './ModalWithBackdrop';

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
                            <Input placeholder='Email' style={styles.input} textStyle={styles.inputText} />
                        </View>
                        <ModalWithBackdrop option='' name='Gender' element='genderElement' />
                        <ModalWithBackdrop option='' name='Weight Units' element='weightElement' />
                        <ModalWithBackdrop option='' name='Notifications' />
                        <ModalWithBackdrop option='' name='Log Out' />
                    </View>

                    <Text style={styles.header}>Fitness Calculators</Text>
                    <View style={{ flexDirection: 'column', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Button
                            style={styles.button}
                            textStyle={{ fontWeight: '500', marginRight: 245 }}
                            icon={arrowIcon}
                            onPress={() => this.props.navigation.navigate('BMI')}>BMI Calculator</Button>
                        <Button
                            style={styles.button}
                            textStyle={{ fontWeight: '500', marginRight: 235 }}
                            icon={arrowIcon}
                            onPress={() => this.props.navigation.navigate('TDEE')}>TDEE Calculator</Button>
                        <Button
                            style={styles.button}
                            textStyle={{ fontWeight: '500', marginRight: 235 }}
                            icon={arrowIcon}
                            onPress={() => this.props.navigation.navigate('Macro')}>Macro Calculator</Button>
                    </View>
                </ScrollView>
                <BottomNavigationWithIconsShowcase style={styles.bottomTabs} />
            </Layout>
        );
    }
}

const arrowIcon = (style) => (
    <Icon name='angle-right' style={{ color: '#8F9BB3', paddingLeft: 10 }} />
);

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
