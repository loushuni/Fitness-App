import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button, Input, Layout } from '@ui-kitten/components';

const Calculators = () => {
    return (
        <Layout>
            <Text>Fitness Calculators</Text>
            <View style={{ flexDirection: 'column', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                <Button
                    style={styles.button}
                    textStyle={{ fontWeight: '500', marginRight: 245 }}
                    icon={arrowIcon}
                    onPress={() => this.props.navigation.navigate('BMI')}>BMI Calculator</Button>
                <Button
                    style={styles.button}
                    textStyle={{ fontWeight: '500', marginRight: 235 }}
                    icon={arrowIcon}
                    onPress={() => this.props.navigation.navigate('TDEE')}>TDEE Calculator</Button>
                <Button
                    style={styles.button}
                    textStyle={{ fontWeight: '500', marginRight: 228 }}
                    icon={arrowIcon}
                    onPress={() => this.props.navigation.navigate('Macro')}>Macro Calculator</Button>
                <Button
                    style={styles.button}
                    textStyle={{ fontWeight: '500', marginRight: 241 }}
                    icon={arrowIcon}
                    onPress={() => this.props.navigation.navigate('OneRM')}>1RM Calculator</Button>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {

    }
})

export default Calculators;