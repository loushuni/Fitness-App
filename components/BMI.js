import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';


const BMI = () => {

    const [selectedOption, setSelectedOption] = React.useState(null);

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ marginRight: 10 }}>Weight:</Text>
                <Input placeholder='Enter Your Weight' style={styles.input} />
                <Select
                    data={weightData}
                    selectedOption={selectedOption}
                    onSelect={setSelectedOption}
                />
            </Layout>
            <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ marginRight: 10 }}>Height:</Text>
                <Input placeholder='Enter Your Height' style={styles.input} />
                <Select
                    data={heightData}
                    selectedOption={selectedOption}
                    onSelect={setSelectedOption}
                />
            </Layout>
            <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Button style={styles.button}>Calculate BMI</Button>
                <Input placeholder='' style={{ width: '25%' }} />
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
        width: '45%',
        paddingRight: 10
    }
})

export default BMI;



/*
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Select } from '@ui-kitten/components';

const data1 = [
    { text: 'kg' },
    { text: 'lb' }
];

const data2 = [
    { text: 'cm' },
    { text: 'inch' }
];

const BMI = () => {

    const [selectedOption, setSelectedOption] = React.useState(null);

    return (
        <Layout style={styles.container}>
            <Select
                data={data1}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
            />
            <Select
                data={data2}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BMI;
*/