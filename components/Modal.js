import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, Text } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/ui/support/typings';

const ModalWithBackdropShowcase = (props) => {

    const [visible, setVisible] = React.useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    const renderModalElement = () => (
        <Layout
            level='3'
            style={styles.modalContainer}>
            <Text>Modal</Text>
        </Layout>
    );

    return (
        <Layout >
            <Button onPress={toggleModal} style={styles.button} textStyle={styles.buttonText}>
                {props.name}
            </Button>
            <Modal
                allowBackdrop={true}
                backdropStyle={styles.backdrop}
                onBackdropPress={toggleModal}
                visible={visible}>
                {renderModalElement()}
            </Modal>
        </Layout>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 256,
        padding: 16,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        alignSelf: 'stretch',
        borderWidth: 1,
        height: 50,
        borderColor: 'black',
        borderBottomWidth: 0,
        backgroundColor: '#2E3A59'
    },
    buttonText: {
        width: '100%',
        fontWeight: '500',
        fontSize: 15,
        paddingLeft: 10
    }
  }
);

export default ModalWithBackdropShowcase;