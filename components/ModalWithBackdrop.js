import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Button, Layout, Modal, Text, Icon } from '@ui-kitten/components';
import firebase from './FirebaseConfig';
//import DateTimePicker from '@react-native-community/datetimepicker';

const ModalWithBackdrop = (props) => {

    const [visible, setVisible] = React.useState(false);

    var userId = firebase.auth().currentUser.uid;

    const [gender, setGender] = React.useState(props.option);

    const [goal, setGoal] = React.useState(props.option);

    const [birthday, setBirthday] = React.useState(props.option);

    const [height, setHeight] = React.useState(props.option);

    const [heightUnit, setHeightUnit] = React.useState(props.unit);

    const [weight, setWeight] = React.useState(props.option);

    const [weightUnit, setWeightUnit] = React.useState(props.unit);

    useEffect(() => {
        setGender(props.option);
        setGoal(props.option);
        setHeight(props.option);
        setHeightUnit(props.unit);
        setWeight(props.option);
        setWeightUnit(props.unit);
    }, [props.option, props.unit])

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

    // const updateBirthday = (birthday) => {
    //     firebase.database().ref('users/' + userId).update({
    //         birthday: birthday
    //     });
    // }

    const updateHeight = (height, heightUnit) => {
        firebase.database().ref('users/' + userId).update({
            height: height,
            heightUnit: heightUnit
        });
    }

    const updateWeight = (weight, weightUnit) => {
        firebase.database().ref('users/' + userId).update({
            weight: weight,
            weightUnit: weightUnit
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
    } else if (props.element == 'goalElement') {
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Button style={styles.optionButton} onPress={() => setGoal('Lose Weight')}>Lose Weight</Button>
                <Button style={styles.optionButton} onPress={() => setGoal('Get Fitter')}>Get Fitter</Button>
                <Button style={styles.optionButton} status='success' onPress={() => {
                    updateGoal(goal);
                    toggleModal;
                }}>Submit</Button>
            </Layout>
        );
    } else if (props.element == 'heightElement') {
        let pickerItems = null;
        if (heightUnit === 'cm') {
            pickerItems = Array.from(Array(121), (_, x) => x).map((item, index) => (
                <Picker.Item label={`${item + 130}`} key={index} value={`${item + 130}`} />));
        } else {
            pickerItems = Array.from(Array(47), (_, x) => x).map((item, index) => (
                <Picker.Item label={`${item + 52}`} key={index} value={`${item + 52}`} />));
        }
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Layout style={styles.pickerView}>
                    <Picker selectedValue={height} onValueChange={setHeight} style={styles.picker} itemStyle={styles.itemStyle}>
                        {pickerItems}
                    </Picker>
                    <Picker selectedValue={heightUnit} onValueChange={setHeightUnit} style={styles.picker} itemStyle={styles.itemStyle}>
                        < Picker.Item label="inch" value="inch" />
                        < Picker.Item label="cm" value="cm" />
                    </Picker>
                </Layout>
                <Button style={styles.optionButton} status='success' onPress={() => {
                    updateHeight(height, heightUnit);
                    toggleModal;
                }}>Submit</Button>
            </Layout>
        );
    } else if (props.element == 'weightElement') {
        let pickerItems = null;
        if (weightUnit === 'kg') {
            pickerItems = Array.from(Array(116), (_, x) => x).map((item, index) => (
                <Picker.Item label={`${item + 35}`} key={index} value={`${item + 35}`} />));
        } else {
            pickerItems = Array.from(Array(271), (_, x) => x).map((item, index) => (
                <Picker.Item label={`${item + 80}`} key={index} value={`${item + 80}`} />));
        }
        renderElement = (
            <Layout
                level='3'
                style={styles.optionContainer}>
                <Layout style={styles.pickerView}>
                    <Picker selectedValue={weight} onValueChange={setWeight} style={styles.picker} itemStyle={styles.itemStyle}>
                        {pickerItems}
                    </Picker>
                    <Picker selectedValue={weightUnit} onValueChange={setWeightUnit} style={styles.picker} itemStyle={styles.itemStyle}>
                        < Picker.Item label="lb" value="lb" />
                        < Picker.Item label="kg" value="kg" />
                    </Picker>
                </Layout>
                <Button style={styles.optionButton} status='success' onPress={() => {
                    updateWeight(weight + ' ' + weightUnit);
                    toggleModal;
                }}>Submit</Button>
            </Layout>
        );
    }
    // else if (props.element == 'birthdayElement') {
    //     renderElement = (
    //         <Layout
    //             level='3'
    //             style={styles.optionContainer}>
    //             <DateTimePicker
    //                 testID="dateTimePicker"
    //                 value={birthday}
    //                 mode='date'
    //                 display="default"
    //                 onChange={onChange}
    //             />
    //             <Button style={styles.optionButton} status='success' onPress={toggleModal}>Submit</Button>
    //         </Layout>
    //     );
    // }

    let button = null;
    if (props.name == 'Gender') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {gender}
            </Button>
        );
    } else if (props.name == 'Goal') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {goal}
            </Button>
        );
    } else if (props.name == 'Birthday') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {props.option}
            </Button>
        );
    } else if (props.name == 'Height') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {height + ' ' + heightUnit}
            </Button>
        );
    } else if (props.name == 'Weight') {
        button = (
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText} icon={arrowIcon}>
                {weight + ' ' + weightUnit}
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
    },
    pickerView: {
        flex: 1,
        flexDirection: 'row'
    },
    picker: {
        flex: 0.5
    },
    itemStyle: {
        color: 'white'
    }
});

export default ModalWithBackdrop;