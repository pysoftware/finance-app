import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6NVbBtWaZm5P3j4ZHh1Bqs4TatJlYmS4',
  authDomain: 'finance-app-6cdfc.firebaseapp.com',
  databaseURL: 'https://finance-app-6cdfc.firebaseio.com',
  projectId: 'finance-app-6cdfc',
  storageBucket: 'finance-app-6cdfc.appspot.com',
  messagingSenderId: '618921567953',
  appId: '1:618921567953:web:5e0513acafd208704647f0',
  measurementId: 'G-H2X987S04D',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();

export default firebase;

