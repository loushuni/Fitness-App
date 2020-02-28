import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Layout, Icon } from '@ui-kitten/components';

export default class Calculators extends Component {
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.title}>Fitness Calculators</Text>
                <Layout style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        //icon={arrowIcon}
                        onPress={() => this.props.navigation.navigate('BMI')}>BMI Calculator</Button>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        //icon={arrowIcon}
                        onPress={() => this.props.navigation.navigate('TDEE')}>TDEE Calculator</Button>
                </Layout>
                <Layout style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        //icon={arrowIcon}
                        onPress={() => this.props.navigation.navigate('Macro')}>Macro Calculator</Button>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        //icon={arrowIcon}
                        onPress={() => this.props.navigation.navigate('OneRM')}>1RM Calculator</Button>
                </Layout>
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
    }
})