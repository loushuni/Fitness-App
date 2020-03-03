import React, { Component, useEffect } from 'react';
import { StyleSheet, Picker, ScrollView, Alert } from 'react-native';
import { Layout, Text, Input, Button, Radio, RadioGroup, Modal, Select, Tab, TabView } from '@ui-kitten/components';
import firebase from './FirebaseConfig';

const Macro = () => {
    const userId = firebase.auth().currentUser.uid;

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const [ageVisible, setAgeVisible] = React.useState(false);

    const [weightVisible, setWeightVisible] = React.useState(false);

    const [heightVisible, setHeightVisible] = React.useState(false);

    const [age, setAge] = React.useState('Choose Your Age');

    const [weight, setWeight] = React.useState('Choose Your Weight');

    const [weightUnit, setWeightUnit] = React.useState('');

    const [height, setHeight] = React.useState('Choose Your Height');

    const [heightUnit, setHeightUnit] = React.useState('');

    const [selectedOption, setSelectedOption] = React.useState('');

    const [selectedGoal, setSelectedGoal] = React.useState('');

    const [bodyFat, setBodyFat] = React.useState('');

    const [result, setResult] = React.useState(0);

    useEffect(() => {
        if (result != 0) {
            firebase.database().ref('users/' + userId).update({
                macroProtein: mp,
                macroFat: mf,
                macroCarbs: mc
            });
        }
    }, [mp, mf, mc]);

    useEffect(() => {
        var s = firebase.database().ref('users/' + userId);
        s.on('value', function (snapshot) {
            const data = snapshot.val();
            setSelectedIndex(data.gender == 'Male' ? 0 : 1);
            setWeight(data.weight);
            setHeight(data.height);
            setWeightUnit(data.weightUnit);
            setHeightUnit(data.heightUnit);
        }.bind(this));
    }, []);

    const toggleAgeModal = () => {
        setAgeVisible(!ageVisible);
    };

    const toggleWeightModal = () => {
        setWeightVisible(!weightVisible);
    };

    const toggleHeightModal = () => {
        setHeightVisible(!heightVisible);
    };

    const activities = [{ text: 'Sedentary (Office Job)' }, { text: 'Light Exercise (1-2 days/week)' }, { text: 'Moderate Exercise (3-5 days/week)' }, { text: 'Heavy Exercise (6-7 days/week)' }];

    const goals = [{ text: 'Maintain' }, { text: 'Bulk' }, { text: 'Shred' }];

    const onCheckedChange = (index) => {
        setSelectedIndex(index);
    };

    let agePickerItems = Array.from(Array(91), (_, x) => x).map((item, index) => (
        <Picker.Item label={`${item + 10}`} key={index} value={`${item + 10}`} />));

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

    let agePicker = (
        <Layout style={styles.pickerContainer}>
            <Picker selectedValue={age} onValueChange={setAge} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white', backgroundColor: '#2E3A59' }}>
                {agePickerItems}
            </Picker>
        </Layout>
    );

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

    let res = null;
    if (bodyFat == '') {
        if (selectedIndex == 0 && weightUnit == 'lb') {
            res = 66.47 + (6.24 * +weight) + (12.7 * +height) - (6.755 * +age);
        } else if (selectedIndex == 0 && weightUnit == 'kg') {
            res = (+height * 6.25) + (+weight * 10) - (+age * 5) + 5;
        } else if (selectedIndex == 1 && weightUnit == 'lb') {
            res = 655.1 + (4.35 * +weight) + (4.7 * +height) - (4.7 * +age);
        } else if (selectedIndex == 1 && weightUnit == 'kg') {
            res = (+height * 6.25) + (+weight * 10) - (+age * 5) - 151;
        }
    } else {
        if (weightUnit == 'lb') {
            res = 370 + (21.6 * +weight * 0.4536 * (1 - +bodyFat / 100));
        } else if (weightUnit == 'kg') {
            res = 370 + (21.6 * +weight * (1 - +bodyFat / 100));
        }
    }

    if (selectedOption.text == 'Sedentary (Office Job)') {
        res = (res * 1.1).toFixed(2);
    } else if (selectedOption.text == 'Light Exercise (1-2 days/week)') {
        res = (res * 1.275).toFixed(2);
    } else if (selectedOption.text == 'Moderate Exercise (3-5 days/week)') {
        res = (res * 1.35).toFixed(2);
    } else if (selectedOption.text == 'Heavy Exercise (6-7 days/week)') {
        res = (res * 1.525).toFixed(2);
    }

    const [mp, setMP] = React.useState(0);
    const [mf, setMF] = React.useState(0);
    const [mc, setMC] = React.useState(0);
    const [lp, setLP] = React.useState(0);
    const [lf, setLF] = React.useState(0);
    const [lc, setLC] = React.useState(0);
    const [hp, setHP] = React.useState(0);
    const [hf, setHF] = React.useState(0);
    const [hc, setHC] = React.useState(0);

    if (selectedGoal.text == 'Bulk') {
        res = +res + 500;
    } else if (selectedGoal.text == 'Shred') {
        res = res - 500;
    }

    const onPressed = () => {
        if (age == "Choose Your Age") {
            Alert.alert("Please enter your age");
        } else if (weight == "Choose Your Weight") {
            Alert.alert("Please enter your weight");
        } else if (height == "Choose Your Height") {
            Alert.alert("Please enter your height");
        } else if (selectedOption == "") {
            Alert.alert("Please select from the activities");
        } else if (selectedGoal == "") {
            Alert.alert("Please select your workout goal");
        }
        setMP((res * 0.3 / 4).toFixed(0));
        setMF((res * 0.35 / 9).toFixed(0));
        setMC((res * 0.35 / 4).toFixed(0));
        setLP((res * 0.4 / 4).toFixed(0));
        setLF((res * 0.4 / 9).toFixed(0));
        setLC((res * 0.2 / 4).toFixed(0))
        setHP((res * 0.3 / 4).toFixed(0));
        setHF((res * 0.2 / 9).toFixed(0));
        setHC((res * 0.5 / 4).toFixed(0));
    }

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Macro Calculator</Text>
            <ScrollView>
                <Layout style={{ alignContent: 'center', paddingLeft: 40 }}>

                    <Layout style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 10, paddingRight: 20 }}>Gender:</Text>
                        <RadioGroup
                            selectedIndex={selectedIndex}
                            onChange={onCheckedChange}
                            style={{ flexDirection: 'row' }}>
                            <Radio text='Male' />
                            <Radio text='Female' />
                        </RadioGroup>
                    </Layout>

                    <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ paddingTop: 7, paddingRight: 45 }}>Age:</Text>
                        <Text onPress={toggleAgeModal} style={styles.placeholder}>{age}</Text>
                        <Modal
                            allowBackdrop={true}
                            backdropStyle={styles.backdrop}
                            onBackdropPress={toggleAgeModal}
                            visible={ageVisible}>
                            {agePicker}
                        </Modal>
                    </Layout>

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

                    <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text>Activities:</Text>
                        <Select
                            data={activities}
                            selectedOption={selectedOption}
                            onSelect={setSelectedOption}
                            style={styles.select}
                            textStyle={{ color: '#8F9BB3', fontWeight: 'normal' }}
                        />
                    </Layout>

                    <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text>Workout Goal:</Text>
                        <Select
                            data={goals}
                            selectedOption={selectedGoal}
                            onSelect={setSelectedGoal}
                            style={styles.select}
                            textStyle={{ color: '#8F9BB3', fontWeight: 'normal' }}
                        />
                    </Layout>

                    <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ paddingRight: 15, paddingTop: 5 }}>Body Fat % (Optional):</Text>
                        <Input style={{ width: 60 }} value={bodyFat} onChangeText={setBodyFat} placeholder='%' />
                    </Layout>

                </Layout >

                <Layout style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button style={styles.button} onPress={onPressed}>Calculate Macro</Button>
                </Layout>

                <Layout style={{ flexDirection: 'row', alignItems: 'center', width: 180, marginRight: 210, marginTop: 30, marginBottom: 50 }}>
                    <Layout style={{ flexDirection: 'column', width: 130 }}>
                        <Text>Moderate Carb (30/35/35)</Text>
                        <Text style={styles.resultText}>{mp}</Text>
                        <Text style={styles.resultText}>{mf}</Text>
                        <Text style={styles.resultText}>{mc}</Text>
                    </Layout>
                    <Layout style={{ flexDirection: 'column', width: 130 }}>
                        <Text>Lower Carb (40/40/20)</Text>
                        <Text style={styles.resultText}>{lp}</Text>
                        <Text style={styles.resultText}>{lf}</Text>
                        <Text style={styles.resultText}>{lc}</Text>
                    </Layout>
                    <Layout style={{ flexDirection: 'column', width: 130 }}>
                        <Text>Higher Carb (30/20/50)</Text>
                        <Text style={styles.resultText}>{hp}</Text>
                        <Text style={styles.resultText}>{hf}</Text>
                        <Text style={styles.resultText}>{hc}</Text>
                    </Layout>
                </Layout>
            </ScrollView>

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
        marginBottom: 100,
        paddingTop: 10
    },
    select: {
        width: '70%',
        paddingLeft: 10
    },
    button: {
        marginTop: 20,
        alignItems: 'center'
    },
    result: {
        borderWidth: 1,
        borderColor: '#101426',
        paddingHorizontal: 45,
        marginTop: 20,
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#1A2138',
        width: '40%'
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
    resultText: {
        borderColor: '#151A30',
        backgroundColor: '#1A2138',
        borderWidth: 1,
        width: '100%',
        height: 50
    }
});

export default Macro;