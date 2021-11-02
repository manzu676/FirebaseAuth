// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDOF_wqrtCj1ThiYGgOsb_HOmSUWXNZC0",
  authDomain: "pruebafirebase-f2391.firebaseapp.com",
  projectId: "pruebafirebase-f2391",
  storageBucket: "pruebafirebase-f2391.appspot.com",
  messagingSenderId: "748940835624",
  appId: "1:748940835624:web:fceccbf1aec50c2c1eae1d"
};

console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
export default Firebase;
