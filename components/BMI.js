import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';


const BMI = () => {

    // const [selectedOption1, setSelectedOption1] = React.useState(null);

    // const [selectedOption2, setSelectedOption2] = React.useState(null);

    const [weight, setWeight] = React.useState('');

    const [height, setHeight] = React.useState('');

    let res = null;

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Layout style={{flexDirection: 'column', marginLeft: 50 }}>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 8 }}>Weight:</Text>
                    <Input
                        placeholder='Enter Your Weight'
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight} />
                    {/* <Select
                    data={weightData}
                    selectedOption={selectedOption1}
                    onSelect={setSelectedOption1}
                    style={{ width: '28%' }}
                /> */}
                    <Text style={{ paddingTop: 10 }}>lb</Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 8 }}>Height:</Text>
                    <Input
                        placeholder='Enter Your Height'
                        style={styles.input}
                        value={height}
                        onChangeText={setHeight} />
                    {/* <Select
                    data={heightData}
                    selectedOption={selectedOption2}
                    onSelect={setSelectedOption2}
                    style={{ width: '28%' }}
                /> */}
                    <Text style={{ paddingTop: 10 }}>inch</Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 10, fontWeight: 'bold' }}>Your BMI:</Text>
                    <Text style={styles.result}>{height}</Text>
                </Layout>
            </Layout>
        </Layout>
    );

}

// const weightData = [
//     { text: 'kg' },
//     { text: 'lb' }
// ];

// const heightData = [
//     { text: 'cm' },
//     { text: 'inch' }
// ];

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
        width: '55%',
        paddingRight: 10
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
})

export default BMI;