import React, { Component } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';

const OneRM = () => {
    const [lift, setLift] = React.useState('');

    const [unit, setUnit] = React.useState('');

    const [rep, setRep] = React.useState('');

    const [result, setResult] = React.useState(0);

    const units = [{ text: 'lb' }, { text: 'kg' }];

    const reps = Array.from(Array(12), (_, x) => x).map((item, index) => (
        { text: `${item + 1}` }));

    let map = new Map();
    map.set('1', '100');
    map.set('2', '95');
    map.set('3', '93');
    map.set('4', '90');
    map.set('5', '87');
    map.set('6', '85');
    map.set('7', '83');
    map.set('8', '80');
    map.set('9', '77');
    map.set('10', '75');
    map.set('11', '73');
    map.set('12', '70');

    const items = [
        { key: '2', value: map.get('2') },
        { key: '3', value: map.get('3') },
        { key: '4', value: map.get('4') },
        { key: '5', value: map.get('5') },
        { key: '6', value: map.get('6') },
        { key: '7', value: map.get('7') },
        { key: '8', value: map.get('8') },
        { key: '9', value: map.get('9') },
        { key: '10', value: map.get('10') },
        { key: '11', value: map.get('11') },
        { key: '12', value: map.get('12') }
    ];

    const onPressed = () => {
        if (lift == "") {
            Alert.alert("Please enter the weight you can lift");
        } else if (isNaN(lift)) {
            Alert.alert("Please enter a valid number of weight lifted");
        } else if (unit == "") {
            Alert.alert("Please choose the weight unit");
        } else if (rep == "") {
            Alert.alert("Please choose from the repetitions");
        }
        setResult(lift / (map.get(rep.text) / 100));
    }

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
                        textStyle={{ color: '#8F9BB3' }}
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
            <Button style={styles.button} onPress={onPressed}>Calculate 1RM</Button>
            <Layout style={{flexDirection: 'row'}}>
                <Text style={styles.result}>{result}</Text>
                <Text style={{fontSize: 25, paddingTop: 20, paddingLeft: 10, fontWeight: '700'}}>{unit.text}</Text>
            </Layout>
            <Text style={{ backgroundColor: '#8F9BB3', width: 410, height: 2, marginTop: 20 }}></Text>
            <Text style={{ alignSelf: 'center', fontWeight: '700', marginTop: 10, marginBottom: 10 }}>Percentages</Text>
            <ScrollView>
                {items.map(each => (
                    <Layout style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Layout style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 100 }}>{each.value + '%'}</Text>
                            <Text style={{ marginRight: 100 }}>{result * each.value / 100}</Text>
                            <Text>{each.key + ' ' + 'Reps'}</Text>
                        </Layout>
                        <Text style={{ backgroundColor: '#2E3A59', width: 410, height: 1, marginTop: 10, marginBottom: 10 }}></Text>
                    </Layout>
                ))}
            </ScrollView>
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
        paddingTop: 18,
        paddingBottom: 11,
        backgroundColor: '#1A2138',
        width: '35%',
        fontWeight: '700',
        fontSize: 25,
        textAlign: 'center'
    }
});

export default OneRM;