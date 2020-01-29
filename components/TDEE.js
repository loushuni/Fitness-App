import React, { Component } from 'react';
import { StyleSheet, Picker, View } from 'react-native';
import { Layout, Text, Input, Button, Radio, RadioGroup, Modal, Select } from '@ui-kitten/components';

const TDEE = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const [ageVisible, setAgeVisible] = React.useState(false);

    const [weightVisible, setWeightVisible] = React.useState(false);

    const [heightVisible, setHeightVisible] = React.useState(false);

    const [age, setAge] = React.useState(0);

    const [weight, setWeight] = React.useState(0);

    const [weightUnit, setWeightUnit] = React.useState('');

    const [height, setHeight] = React.useState(0);

    const [heightUnit, setHeightUnit] = React.useState('');

    const [selectedOption, setSelectedOption] = React.useState('');

    const toggleAgeModal = () => {
        setAgeVisible(!ageVisible);
    };

    const toggleWeightModal = () => {
        setWeightVisible(!weightVisible);
    };

    const toggleHeightModal = () => {
        setHeightVisible(!heightVisible);
    };

    //const data = [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }, { text: '9' }, { text: '10' }];
    //const data = ['1', '2'];
    const activities = [{text: 'Sedentary (Office Job)'}, {text: 'Light Exercise (1-2 days/week)'}, {text: 'Moderate Exercise (3-5 days/week)'}, {text: 'Heavy Exercise (6-7 days/week)'}, {text: 'Athlete (2x per day)'}];

    const onCheckedChange = (index) => {
        setSelectedIndex(index);
    };

    let agePicker = (
        <View style={styles.pickerView}>
            <Picker selectedValue={age} onValueChange={setAge} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white' }}>
                < Picker.Item label="1" value="1" />
                < Picker.Item label="2" value="2" />
            </Picker>
        </View>
    );

    let weightPicker = (
        <View style={styles.pickerView}>
            <Picker selectedValue={weight} onValueChange={setWeight} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white' }}>
                < Picker.Item label="1" value="1" />
                < Picker.Item label="2" value="2" />
            </Picker>
            <Picker selectedValue={weightUnit} onValueChange={setWeightUnit} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white' }}>
                < Picker.Item label="lb" value="lb" />
                < Picker.Item label="kg" value="kg" />
            </Picker>
        </View>
    );

    let heightPicker = (
        <View style={styles.pickerView}>
            <Picker selectedValue={height} onValueChange={setHeight} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white' }}>
                < Picker.Item label="1" value="1" />
                < Picker.Item label="2" value="2" />
            </Picker>
            <Picker selectedValue={heightUnit} onValueChange={setHeightUnit} style={{ height: 50, width: 100, color: 'white' }} itemStyle={{ color: 'white' }}>
                < Picker.Item label="inch" value="inch" />
                < Picker.Item label="cm" value="cm" />
            </Picker>
        </View>
    );

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>TDEE Calculator</Text>
            <Layout style={{ alignContent: 'center', paddingLeft: 40 }}>


                <Layout style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 10, paddingRight: 10 }}>Gender</Text>
                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={onCheckedChange}
                        style={{ flexDirection: 'row' }}>
                        <Radio text='Male' />
                        <Radio text='Female' />
                    </RadioGroup>
                </Layout>


                <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ paddingTop: 7, paddingRight: 33 }}>Age:</Text>
                    <Text onPress={toggleAgeModal}>{age}</Text>
                    <Modal
                        allowBackdrop={true}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={toggleAgeModal}
                        visible={ageVisible}>
                        {agePicker}
                    </Modal>
                </Layout>



                <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ paddingTop: 7, paddingRight: 33 }}>Weight:</Text>
                    <Text onPress={toggleWeightModal}>{weight + ' ' + weightUnit}</Text>
                    <Modal
                        allowBackdrop={true}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={toggleWeightModal}
                        visible={weightVisible}>
                        {weightPicker}
                    </Modal>
                </Layout>


                <Layout style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ paddingTop: 7, paddingRight: 33 }}>Height:</Text>
                    <Text onPress={toggleHeightModal}>{height + ' ' + heightUnit}</Text>
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
                    />
                </Layout>




            </Layout >
            <Layout style={{ flexDirection: 'row' }}>
                <Button style={styles.button}>Calculate TDEE</Button>
                <Text style={styles.result}>Result</Text>
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
    select: {
        width: '70%'
    },
    button: {
        marginTop: 20
    },
    result: {
        borderWidth: 1,
        borderColor: '#101426',
        paddingHorizontal: 45,
        marginTop: 20,
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#1A2138',
        width: '35%'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    pickerView: {
        flex: 1,
        flexDirection: 'row'
    },
    picker: {
        flex: 0.5
    }
});

export default TDEE;