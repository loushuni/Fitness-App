import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, Text } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/ui/support/typings';

const ModalWithBackdropShowcase = (props) => {

    const [visible, setVisible] = React.useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    const genderElement = () => (
        <Layout
            level='3'
            style={styles.optionContainer}>
            <Button style={styles.optionButton}>Male</Button>
            <Button style={styles.optionButton}>Female</Button>
            <Button style={styles.optionButton}>Other</Button>
            <Button style={styles.optionButton}>Cancel</Button>
        </Layout>
    );

    const weightElement = () => (
        <Layout
            level='3'
            style={styles.optionContainer}>
            <Button style={styles.optionButton}>kg</Button>
            <Button style={styles.optionButton}>lb</Button>
            <Button style={styles.optionButton}>Cancel</Button>
        </Layout>
    );

    return (
        <Layout>
            <Layout style={styles.elementContainer}>
                <Text style={styles.text}>{props.name}</Text>
                <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText}>
                    {props.button}
                </Button>
            </Layout>
            <Modal
                allowBackdrop={true}
                style={styles.modal}
                backdropStyle={styles.backdrop}
                onBackdropPress={toggleModal}
                visible={visible}>
                {genderElement()}
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
        backgroundColor: '#2E3A59',
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
        width: '50%'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'right',
        color: '#8F9BB3'
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

export default ModalWithBackdropShowcase;