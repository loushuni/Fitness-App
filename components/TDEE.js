import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button, Select, Radio, RadioGroup } from '@ui-kitten/components';

const TDEE = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onCheckedChange = (index) => {
        setSelectedIndex(index);
    };

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>TDEE Calculator</Text>
            <Layout>
                <Layout style={{ flexDirection: 'row' }}>
                    <Text>Gender</Text>
                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={onCheckedChange}
                        style={{ flexDirection: 'row' }}>
                        <Radio text='Male' />
                        <Radio text='Female' />
                    </RadioGroup>
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
        marginBottom: 200,
        paddingTop: 10
    },
});

export default TDEE;