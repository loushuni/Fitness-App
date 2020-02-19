import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDq6clYfRSGu-I-a_F_QrOmNpizrlDb3so",
    authDomain: "fitness-app-bf0a6.firebaseapp.com",
    databaseURL: "https://fitness-app-bf0a6.firebaseio.com",
    projectId: "fitness-app-bf0a6",
    storageBucket: "fitness-app-bf0a6.appspot.com",
    messagingSenderId: "257940969653",
    appId: "1:257940969653:web:4a8befafc6c12ce20246fc",
    measurementId: "G-79S056Y2GR"
  };

const Firebase = firebase.initializeApp(firebaseConfig);
//var database = firebase.database();

export default Firebase;
