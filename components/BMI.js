import React, { Component, useEffect } from 'react';
import { StyleSheet, Alert, Picker } from 'react-native';
import { Layout, Text, Input, Button, Select, Modal } from '@ui-kitten/components';
import firebase from './FirebaseConfig';
import ModalWithBackdrop from './ModalWithBackdrop';
//import { useNavigation } from '@react-navigation/native';

const BMI = () => {

    const userId = firebase.auth().currentUser.uid;

    const [weight, setWeight] = React.useState('');

    const [weightUnit, setWeightUnit] = React.useState('');

    const [height, setHeight] = React.useState('');

    const [heightUnit, setHeightUnit] = React.useState('');

    const [result, setResult] = React.useState(0);

    const [weightVisible, setWeightVisible] = React.useState(false);

    const [heightVisible, setHeightVisible] = React.useState(false);

    // const navigation = useNavigation();

    const toggleWeightModal = () => {
        setWeightVisible(!weightVisible);
    };

    const toggleHeightModal = () => {
        setHeightVisible(!heightVisible);
    };

    useEffect(() => {
        if (result != 0) {
            firebase.database().ref('users/' + userId).update({
                bmi: result
            });
        }
    }, [result]);

    useEffect(() => {
        var s = firebase.database().ref('users/' + userId);
        s.on('value', function (snapshot) {
            const data = snapshot.val();
            setWeight(data.weight);
            setHeight(data.height);
            setWeightUnit(data.weightUnit);
            setHeightUnit(data.heightUnit);
            setResult(data.bmi);
        }.bind(this));
    }, []);

    const onPressed = () => {
        if (weight == "") {
            Alert.alert("Please enter your weight");
        } else if (isNaN(weight)) {
            Alert.alert("Please enter a valid number for your weight");
        } else if (height == "") {
            Alert.alert("Please enter your height");
        } else if (isNaN(height)) {
            Alert.alert("Please enter a valid number for your height");
        }
        if (heightUnit == 'inch' && weightUnit == 'lb') {
            setResult((+weight * 703 / height / height).toFixed(2));
        } else if (heightUnit == 'cm' && weightUnit == 'kg') {
            setResult((+weight / (height / 100) / (height / 100)).toFixed(2));
        }
    }

    let weightPickerItems = null;
    if (weightUnit === 'kg') {
        weightPickerItems = Array.from(Array(116), (_, x) => x).map((item, index) => (
            <Picker.Item label={`${item + 35}`} key={index} value={`${item + 35}`} />));
    } else {
        weightPickerItems = Array.from(Array(271), (_, x) => x).map((item, index) => (
            <Picker.Item label={`${item + 80}`} key={index} value={`${item + 80}`} />));
    }

    let heightPickerItems = null;
    if (heightUnit === 'cm') {
        heightPickerItems = Array.from(Array(121), (_, x) => x).map((item, index) => (
            <Picker.Item label={`${item + 130}`} key={index} value={`${item + 130}`} />));
    } else {
        heightPickerItems = Array.from(Array(47), (_, x) => x).map((item, index) => (
            <Picker.Item label={`${item + 52}`} key={index} value={`${item + 52}`} />));
    }

    let weightPicker = (
        <Layout style={styles.pickerContainer}>
            <Picker selectedValue={weight} onValueChange={setWeight} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white', backgroundColor: '#2E3A59' }}>
                {weightPickerItems}
            </Picker>
            <Picker selectedValue={weightUnit} onValueChange={setWeightUnit} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white', backgroundColor: '#2E3A59' }}>
                < Picker.Item label="lb" value="lb" />
                < Picker.Item label="kg" value="kg" />
            </Picker>
        </Layout>
    );

    let heightPicker = (
        <Layout style={styles.pickerContainer}>
            <Picker selectedValue={height} onValueChange={setHeight} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white', backgroundColor: '#2E3A59' }}>
                {heightPickerItems}
            </Picker>
            <Picker selectedValue={heightUnit} onValueChange={setHeightUnit} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white', backgroundColor: '#2E3A59' }}>
                < Picker.Item label="inch" value="inch" />
                < Picker.Item label="cm" value="cm" />
            </Picker>
        </Layout>
    );

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Layout>
                <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ paddingTop: 7, paddingRight: 23 }}>Weight:</Text>
                    <Text onPress={toggleWeightModal} style={styles.placeholder}>{weight + ' ' + weightUnit}</Text>
                    <Modal
                        allowBackdrop={true}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={toggleWeightModal}
                        visible={weightVisible}>
                        {weightPicker}
                    </Modal>
                </Layout>
                <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ paddingTop: 7, paddingRight: 26 }}>Height:</Text>
                    <Text onPress={toggleHeightModal} style={styles.placeholder}>{height + ' ' + heightUnit}</Text>
                    <Modal
                        allowBackdrop={true}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={toggleHeightModal}
                        visible={heightVisible}>
                        {heightPicker}
                    </Modal>
                </Layout>
                {/* <ModalWithBackdrop option={height} unit={heightUnit} name='Height' element='heightElement' />
                <ModalWithBackdrop option={weight} unit={weightUnit} name='Weight' element='weightElement' /> */}
                {/* <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 8 }}>Weight:</Text>
                    <Input
                        placeholder='Enter Your Weight'
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight} />
                    <Select
                        style={styles.select}
                        data={unit1}
                        selectedOption={weightUnit}
                        onSelect={setWeightUnit}
                    />
                </Layout> */}
                {/* <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 8 }}>Height:</Text>
                    <Input
                        placeholder='Enter Your Height'
                        style={styles.input}
                        value={height}
                        onChangeText={setHeight} />
                    <Select
                        style={styles.select}
                        data={unit2}
                        selectedOption={heightUnit}
                        onSelect={setHeightUnit}
                    />
                </Layout> */}
                <Layout style={styles.resultContainer}>
                    <Button style={styles.button} onPress={onPressed}>Calculate BMI</Button>
                    <Text style={styles.result}>{result}</Text>
                </Layout>
                {/* <Button style={styles.navButton} onPress={() => navigation.navigate('Profile')}>Continue to Your Profile</Button> */}
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
    button: {
        width: '40%',
        marginRight: 20
    },
    input: {
        width: '40%',
        paddingRight: 10
    },
    result: {
        borderWidth: 1,
        borderColor: '#101426',
        paddingHorizontal: 40,
        paddingTop: 11,
        paddingBottom: 11,
        backgroundColor: '#1A2138',
        width: '40%'
    },
    select: {
        width: '35%'
    },
    resultContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 20,
        alignSelf: 'center'
    },
    navButton: {
        width: '50%',
        alignSelf: 'center',
        marginTop: 10
    },
    placeholder: {
        borderColor: '#101426',
        borderWidth: 1,
        backgroundColor: '#1A2138',
        width: '55%',
        color: '#8F9BB3',
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    pickerContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    picker: {
        flex: 0.5
    }
})

export default BMI;