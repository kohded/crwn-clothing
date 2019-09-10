import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDoHU8tduWZMEEDDLu53M3vsX3AvpjhHK0',
  authDomain: 'crwn-clothing-683af.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-683af.firebaseio.com',
  projectId: 'crwn-clothing-683af',
  storageBucket: '',
  messagingSenderId: '53849252572',
  appId: '1:53849252572:web:0d2fb3b9d20a8dada94a19',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
