import React, { Component } from 'react';
import { Text, Layout, Button, BottomNavigation, BottomNavigationTab, Icon, Input } from '@ui-kitten/components';
import { View, StyleSheet, Alert, Picker } from 'react-native';
import SettingsList from 'react-native-settings-list';
import ModalSelector from 'react-native-modal-selector';

export default class Profile extends Component {

    state = {
        showModal: false
    }

    alert = () => {
        Alert.alert('hjj');
    }

    changeFirstNameHandler = () => {
        this.props.navigation.navigate('InputFirstName');
    }

    genderHandler = () => {
        let show = this.state.showModal;
        this.setState({ state: !show });
    }

    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.profilePhoto}>Profile Photo Here</Text>
                <Layout style={styles.settingsList}>
                    <SettingsList backgroundColor='#2E3A59' defaultTitleStyle={{ color: 'white' }}>
                        <SettingsList.Header headerText='PROFILE' headerStyle={{ color: 'white', marginLeft: 15 }} />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            onPress={this.changeFirstNameHandler}
                            titleInfo='firstname'
                            hasNavArrow={false}
                            title='First Name' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Last Name'
                            titleInfo='lastname'
                            hasNavArrow={false} />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            titleInfo='emailaddress'
                            hasNavArrow={false}
                            title='Email' />
                        <SettingsList.Item
                            onPress={this.state.genderHandler}
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            titleInfo='Male'
                            title='Gender' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            titleInfo='kg'
                            title='Weight Units' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Sync with Health App' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Notifications' />
                        <SettingsList.Item
                            arrowStyle={{ tintColor: '#8F9BB3' }}
                            title='Log Out' />
                    </SettingsList>
                </Layout>
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
    profilePhoto: {
        flex: 0.19,
        textAlign: 'center',
        marginTop: 50,
        paddingTop: 50
    },
    settingsList: {
        flex: 0.8
    },
    bottomTabs: {
        flex: 0.01,
        textAlign: 'center',
        marginBottom: 10,
        marginVertical: 8
    },
    icon: {
        width: '90%'
    }
});
