import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input } from '@ui-kitten/components';

export default class BMI extends React.Component {
    render () {
        return (
            <Layout style={styles.container}>
              <Text style={styles.title}>BMI Calculator</Text>

            </Layout>
        );
    }
}

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
        marginBottom: 200,
        paddingTop: 10
    }
})