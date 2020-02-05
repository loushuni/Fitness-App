import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';

const OneRM = () => {
    const [lift, setLift] = React.useState('');

    const [unit, setUnit] = React.useState('');

    const [rep, setRep] = React.useState('');

    const units = [{ text: 'lb' }, { text: 'kg' }];

    const reps = Array.from(Array(31), (_, x) => x).map((item, index) => (
        { text: `${item}` }));

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>1RM Calculator</Text>
            <Layout>
                <Layout style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10 }}>Lift:</Text>
                    <Input
                        placeholder='Weight Lifted'
                        value={lift}
                        onChangeText={setLift}
                        style={{ width: '40%' }} />
                    <Select
                        data={units}
                        placeholder=''
                        selectedOption={unit}
                        onSelect={setUnit}
                        style={{ width: 95, marginLeft: 5, paddingBottom: 4 }}
                        textStyle={{ color: '#8F9BB3', fontWeight: 'normal' }}
                    />
                </Layout>
                <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 10 }}>Repetitions:</Text>
                    <Select
                        data={reps}
                        placeholder=''
                        selectedOption={rep}
                        onSelect={setRep}
                        style={{ width: 95, marginLeft: 5, paddingBottom: 4 }}
                        textStyle={{ color: '#8F9BB3', fontWeight: 'normal' }}
                    />
                </Layout>
            </Layout>
            <Button style={styles.button}>Calculate 1RM</Button>
            <Text style={styles.result}>Result</Text>
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
    button: {
        marginTop: 10,
        marginBottom: 20
    },
    result: {
        borderWidth: 1,
        borderColor: '#101426',
        paddingHorizontal: 40,
        paddingTop: 11,
        paddingBottom: 11,
        backgroundColor: '#1A2138',
        width: '35%'
    }
});

export default OneRM;