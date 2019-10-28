import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOo0IFHfvoFolF49N9REWxYSHIksXzP8k",
    authDomain: "snow-clothing.firebaseapp.com",
    databaseURL: "https://snow-clothing.firebaseio.com",
    projectId: "snow-clothing",
    storageBucket: "snow-clothing.appspot.com",
    messagingSenderId: "194583568760",
    appId: "1:194583568760:web:fe59ec811f88ff2560a88d",
    measurementId: "G-CP662YDKR9"
  }

firebase.initializeApp(config);
