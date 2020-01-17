import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Text } from '@ui-kitten/components';

const InputFirstName = (props) => {
    return (
        <Layout style={styles.container}>
            <Input
                style={styles.input}
                placeholder='Input Your First Name' />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginTop: 80,
        alignSelf: 'center'
    }
});

export default InputFirstName;
