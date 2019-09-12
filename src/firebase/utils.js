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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  // documentRef perform CRUD; set(), get(), update(), delete(). collectionRef perform add()
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Get snapshotObject from the referenceObject using .get(). ie. documentRef.get() or collectionRef.get()
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
