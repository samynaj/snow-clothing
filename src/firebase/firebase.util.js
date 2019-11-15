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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if(!snapShot.exists) {

    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error in creating user', error.message)
    }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
