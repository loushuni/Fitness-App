import React, { Component } from 'react';
import { StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { Text, Button, Layout, Icon } from '@ui-kitten/components';

export default class Calculators extends Component {
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.title}>Fitness Calculators</Text>
                <ScrollView>
                    <Layout style={{ flex: 1 }}>
                        <ImageBackground source={require('../assets/13.png')} style={styles.backgroundImage} >
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('BMI')}>BMI Calculator</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/14.png')} style={styles.backgroundImage} >
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('TDEE')}>TDEE Calculator</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/15.png')} style={styles.backgroundImage} >
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Macro')}>Macro Calculator</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/16.png')} style={styles.backgroundImage} >
                            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('OneRM')}>1RM Calculator</Text>
                        </ImageBackground>
                    </Layout>
                </ScrollView>
                <Button style={styles.profileButton} onPress={() => { this.props.navigation.navigate('Profile') }}>Go to Your Profile</Button>
            </Layout>
        );
    }
}

// const arrowIcon = (style) => (
//     <Icon name='angle-right' style={{ color: '#8F9BB3', paddingLeft: 10 }} />
// );

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 27,
        marginTop: 80,
        marginBottom: 150,
        paddingTop: 10
    },
    button: {
        width: '45%',
        borderWidth: 1,
        height: 150,
        borderBottomWidth: 0,
        backgroundColor: '#2E3A59',
        borderColor: '#101426',
        //flexDirection: 'row',
        //flexDirection: 'row-reverse',
        //justifyContent: 'flex-start'
    },
    buttonText: {
        fontSize: 15
    },
    profileButton: {
        width: '50%',
        alignSelf: 'center',
        marginBottom: 50
    },
    backgroundImage: {
        height: '150%',
        width: '100%',
    }
})