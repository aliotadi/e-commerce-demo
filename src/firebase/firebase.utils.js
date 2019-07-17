import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyArz0KZgBXHM6j9IWzFLcLiDZ5m5dqLpeE',
  authDomain: 'e-commerce-db-7d553.firebaseapp.com',
  databaseURL: 'https://e-commerce-db-7d553.firebaseio.com',
  projectId: 'e-commerce-db-7d553',
  storageBucket: '',
  messagingSenderId: '535789333559',
  appId: '1:535789333559:web:4c223b93a951d44b',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
