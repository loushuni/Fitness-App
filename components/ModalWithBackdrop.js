import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, Text, Icon } from '@ui-kitten/components';
import firebase from './FirebaseConfig';

const ModalWithBackdrop = (props) => {

    const [visible, setVisible] = React.useState(false);

    const [gender, setGender] = React.useState('');
    const [goal, setGoal] = React.useState('');

    var userId = firebase.auth().currentUser.uid;

    const toggleModal = () => {
        setVisible(!visible);
    };

    const updateGender = (gender) => {
        firebase.database().ref('users/' + userId).update({
            gender: gender
        });
    }

    const updateGoal = (goal) => {
        firebase.database().ref('users/' + userId).update({
            goal: goal
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
                <Button style={styles.optionButton} onPress={() => setGender('Male')}>Male</Button>
                <Button style={styles.optionButton} onPress={() => setGender('Female')}>Female</Button>
                <Button style={styles.optionButton} onPress={() => setGender('Other')}>Other</Button>
                <Button style={styles.optionButton} status='success' onPress={() => {
                    updateGender(gender);
                    toggleModal;
                }}>Submit</Button>
            </Layout>
        );
    } else if (props.element == 'weightElement') {
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Button style={styles.optionButton} onPress={() => setOption('kg')}>kg</Button>
                <Button style={styles.optionButton} onPress={() => setOption('lb')}>lb</Button>
                <Button style={styles.optionButton} status='success' onPress={toggleModal}>Submit</Button>
            </Layout>
        );
    } else if (props.element == 'goalElement') {
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Button style={styles.optionButton} onPress={() => setGoal('Loss Weight')}>Loss Weight</Button>
                <Button style={styles.optionButton} onPress={() => setGoal('Get Fitter')}>Get Fitter</Button>
                <Button style={styles.optionButton} status='success' onPress={() => {
                    updateGoal(goal);
                    toggleModal;
                }}>Submit</Button>
            </Layout>
        );
    }

    let button = null;
    if (props.name == 'Gender') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {gender}
            </Button>
        );
    } else if (props.name = 'Goal') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {goal}
            </Button>
        );
    }

    return (
        <Layout>
            <Layout style={styles.elementContainer}>
                <Text style={styles.text}>{props.name}</Text>
                {button}
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