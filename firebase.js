import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVRFWbEV5RU141lynZQwT18YKnujjwnfo",
    authDomain: "wereable-ad14a.firebaseapp.com",
    databaseURL: "https://wereable-ad14a.firebaseio.com",
    projectId: "wereable-ad14a",
    storageBucket: "wereable-ad14a.appspot.com",
    messagingSenderId: "227416338700",
    appId: "1:227416338700:web:28f2406f83185f5e169929",
    measurementId: "G-SSYXDBNW5G"
};

firebase.initializeApp(firebaseConfig);

export default firebase;