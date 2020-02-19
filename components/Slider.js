import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Slides from './Slides';
import { Text, Button, Layout } from '@ui-kitten/components';


export default class Slider extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Slides style={styles.slides}/>
                <Layout style={styles.layout}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Setting1')}
                        style={styles.button}
                        textStyle={styles.text}>
                        Let's Get Started!
                    </Button>
                    <Button
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.button}
                        textStyle={styles.text}>
                        I already have an account
                    </Button>
                </Layout>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        width: '60%',
        alignContent: 'center',
        margin: 10,
        height: '20%'
    },
    slides: {
        flex: 0.6
    },
    layout: {
        flex: 0.4,
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        paddingTop: 30
    }
});
