import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUjKE6sICtQUFwUUANAr6mQQBtpbc4Y7s",
    authDomain: "clone-webapp-f6023.firebaseapp.com",
    databaseURL: "https://clone-webapp-f6023.firebaseio.com",
    projectId: "clone-webapp-f6023",
    storageBucket: "clone-webapp-f6023.appspot.com",
    messagingSenderId: "312191949140",
    appId: "1:312191949140:web:35f2020779d7315ac8d0c1",
    measurementId: "G-8THG74XHH1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
console.log('Auth =>', auth);

export { db,auth };