import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button, Icon } from '@ui-kitten/components';
//import * as firebase from 'firebase';
//import * as Google from 'expo-google-app-auth';
//import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
//import { GoogleSignin } from 'react-native-google-signin';

export default class Signup extends Component {
    // signInWithGoogleAsync = async () => {
    //     try {
    //         const result = await Google.logInAsync({
    //             //androidClientId: YOUR_CLIENT_ID_HERE,
    //             behavior: 'web',
    //             iosClientId: '257940969653-u7ds2nq93f098i6kou004k2csagu0ebt.apps.googleusercontent.com',
    //             scopes: ['profile', 'email'],
    //         });

    //         if (result.type === 'success') {
    //             return result.accessToken;
    //         } else {
    //             return { cancelled: true };
    //         }
    //     } catch (e) {
    //         return { error: true };
    //     }
    // }
    onPressed = () => {
        this.props.navigation.navigate('EmailSignup',
            {
                gender: this.props.navigation.state.params.gender,
                goal: this.props.navigation.state.params.goal,
                birthday: this.props.navigation.state.params.birthday,
                height: this.props.navigation.state.params.height,
                heightUnit: this.props.navigation.state.params.heightUnit,
                weight: this.props.navigation.state.params.weight,
                weightUnit: this.props.navigation.state.params.weightUnit,
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/11.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Great choice! Now get your personal daily plan.</Text>
                    <Button
                        style={styles.button1}
                        onPress={this.onPressed}
                        textStyle={styles.buttonText}>
                        Sign Up With Email
                    </Button>
                    <GoogleButton />
                    <AppleButton />
                    <FacebookButton />
                    <Text style={styles.bottomText}>By signing up, I agree to the Terms of Use and Privacy Policy</Text>
                </ImageBackground>
            </View>
        );
    }
}

// const login = () => {
//     GoogleSignin.hasPlayServices({ autoResolve: true })
//         .then(() => {
//             GoogleSignin.configure(KEYS)
//                 .then(() => {
//                     GoogleSignin.signIn()
//                         .then(onGoogleLoginSuccess)
//                         .catch(error => { })
//                         .done();
//                 });
//         })
//         .catch((err) => {
//             console.log("Play services error", err.code, err.message);
//         })
// }


// const onGoogleLoginSuccess = (user) => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     var token = user.idToken;
//     const credential = provider.credential(token);
//     firebase.auth().signInWithCredential(credential)
//         .then((data) => {
//             console.log('SUCCESS', data);
//         })
//         .catch((error) => {
//             console.log('ERROR', error);
//         });
// }
// 


// GoogleSignin.configure({}).then(() => {
//     GoogleSignin.hasPlayServices({ autoResolve: true })
//       .then(() => {
//         GoogleSignin.signIn()
//           .then(user => {
//             console.log(user);

//             const credential = firebase.auth.GoogleAuthProvider.credential(
//               user.idToken,
//               user.accessToken
//             );

//             firebase
//               .auth()
//               .signInWithCredential(credential)
//               .then(user => {
//                 console.log("user firebase ", user);
//                 if (user._authObj.authenticated) {
//                   // do you login action here
//                   // dispatch({
//                   //  type: LOGIN_SUCCESS,
//                   //  payload: { ...user._user, loggedIn: true }
//                   //});
//                 }
//               });
//           })
//           .catch(err => {
//             console.log("WRONG SIGNIN", err);
//           })
//           .done();
//       })
//       .catch(err => {
//         console.log("Play services error", err.code, err.message);
//       });
//  });

// async function googleLogin() {
//     try {
//         // add any configuration settings here:
//         await GoogleSignin.configure();

//         const data = await GoogleSignin.signIn();

//         // create a new firebase credential with the token
//         const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
//         // login with credential
//         const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

//         console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
//     } catch (e) {
//         console.error(e);
//     }
// }


const GoogleIcon = (style) => (
    <Icon name='google' {...style} />
);

const GoogleButton = () => (
    <Button icon={GoogleIcon} style={styles.button2} >Continue With Google</Button>
);

const AppleIcon = (style) => (
    <Icon name='apple' {...style} />
);

const AppleButton = () => (
    <Button icon={AppleIcon} style={styles.button2}>Continue With Apple</Button>
);

const FacebookIcon = (style) => (
    <Icon name='facebook-f' {...style} />
);

const FacebookButton = () => (
    <Button icon={FacebookIcon} style={styles.button3}>Sign Up with Facebook</Button>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 260,
        paddingBottom: 30,
        padding: 10
    },
    button1: {
        width: '85%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    button2: {
        width: '85%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center',
    },
    button3: {
        width: '85%',
        paddingVertical: 15,
        marginTop: 20,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
        padding: 3
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    bottomText: {
        marginTop: 50,
        color: 'white',
        textAlign: 'center'
    }
});