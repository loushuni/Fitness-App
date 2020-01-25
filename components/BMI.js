import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';

export default class BMI extends React.Component {
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.title}>BMI Calculator</Text>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{marginRight: 10}}>Weight:</Text>
                    <Input placeholder='Enter Your Weight' style={styles.input} />
                </Layout>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{marginRight: 10}}>Height:</Text>
                    <Input placeholder='Enter Your Height' style={styles.input} />
                </Layout>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Button style={styles.button}>Calculate BMI</Button>
                    <Input placeholder='' style={{width: '25%'}}/>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 27,
        marginTop: 80,
        marginBottom: 200,
        paddingTop: 10
    },
    button: {
        width: '35%',
        marginRight: 10
    },
    input: {
        width: '48%'
    }
})