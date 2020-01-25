import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';


const BMI = () => {

    const [selectedOption, setSelectedOption] = React.useState(null);

    const [weight, setWeight] = React.useState('');

    const [height, setHeight] = React.useState('');

   // let res = `${weight} + ${1}`;
   let res = weight;

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ marginRight: 10, marginTop: 8 }}>Weight:</Text>
                <Input
                    placeholder='Enter Your Weight'
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight} />
                <Select
                    data={weightData}
                    selectedOption={selectedOption}
                    onSelect={setSelectedOption}
                    style={{width: '28%'}}
                />
            </Layout>
            <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ marginRight: 10, marginTop: 8 }}>Height:</Text>
                <Input
                    placeholder='Enter Your Height'
                    style={styles.input}
                    value={height}
                    onChangeText={setHeight} />
                <Select
                    data={heightData}
                    selectedOption={selectedOption}
                    onSelect={setSelectedOption}
                    style={{width: '28%'}}
                />
            </Layout>
            <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ marginRight: 10, marginTop: 10, fontWeight: 'bold' }}>Your BMI:</Text>
                <Input placeholder={res} style={{ width: '30%', marginTop: 3 }} />
            </Layout>
        </Layout>
    );

}

const weightData = [
    { text: 'kg' },
    { text: 'lb' }
];

const heightData = [
    { text: 'cm' },
    { text: 'inch' }
];

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
        width: '40%',
        paddingRight: 10
    }
})

export default BMI;