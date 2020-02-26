import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, Text, Icon } from '@ui-kitten/components';
import firebase from './FirebaseConfig';

const ModalWithBackdrop = (props) => {

    const [visible, setVisible] = React.useState(false);

    const [option, setOption] = React.useState('Femalela');

    var userId = firebase.auth().currentUser.uid;

    const toggleModal = () => {
        setVisible(!visible);
    };

    const updateData = (gender) => {
        firebase.database().ref('users/' + userId).update({
            gender: gender
        });
    }

    const arrowIcon = (style) => (
        <Icon name='angle-right' style={{ color: '#8F9BB3', paddingLeft: 10 }} />
    );

    let renderElement = null;
    if (props.element == 'genderElement') {
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Button style={styles.optionButton} onPress={() => setOption('Male')}>Male</Button>
                <Button style={styles.optionButton} onPress={() => setOption('Female')}>Female</Button>
                <Button style={styles.optionButton} onPress={() => setOption('Other')}>Other</Button>
                <Button style={styles.optionButton} status='success' onPress={() => {
                    updateData(option);
                    toggleModal;
                }}>Submit</Button>
            </Layout>
        );
    } else if (props.element == 'weightElement') {
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Button style={styles.optionButton} onPress={(option) => setOption('kg')}>kg</Button>
                <Button style={styles.optionButton} onPress={(option) => setOption('lb')}>lb</Button>
                <Button style={styles.optionButton} status='success' onPress={toggleModal}>Submit</Button>
            </Layout>
        );
    }

    return (
        <Layout>
            <Layout style={styles.elementContainer}>
                <Text style={styles.text}>{props.name}</Text>
                <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                    {option}
                </Button>
            </Layout>
            <Modal
                allowBackdrop={true}
                style={styles.modal}
                backdropStyle={styles.backdrop}
                onBackdropPress={toggleModal}
                visible={visible}>
                {renderElement}
            </Modal>
        </Layout>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    optionButton: {
        width: '100%',
        alignSelf: 'stretch',
        borderColor: 'black',
        height: 50,
        borderBottomWidth: 0
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#2E3A59',
        borderRadius: 0,
        width: '50%',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#8F9BB3',
        marginRight: 0
    },
    cancelButton: {
        width: '100%',
        backgroundColor: '#2E3A59',
        alignSelf: 'stretch',
        borderColor: 'black',
        height: 50
    },
    modal: {
        width: '100%'
    },
    text: {
        width: '50%',
        paddingTop: 15,
        paddingLeft: 20,
        fontWeight: '500',
        backgroundColor: '#2E3A59'
    },
    elementContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderBottomWidth: 0
    }
});

export default ModalWithBackdrop;