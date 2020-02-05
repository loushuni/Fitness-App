import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';

const OneRM = () => {
    const [lift, setLift] = React.useState('');

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>1RM Calculator</Text>
            <Layout>
                <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{marginRight: 10}}>Lift:</Text>
                    <Input placeholder='Weight Lifted' value={lift} onChangeText={setLift} />
                </Layout>
                <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{marginRight: 10}}>Repetitions:</Text>
                    <Input placeholder='Repetitions' />
                </Layout>
            </Layout>

        </Layout>
    );
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
        marginBottom: 100,
        paddingTop: 10
    },
});

export default OneRM;