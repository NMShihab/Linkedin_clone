import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBtysBXb8hyC7l2-k8el1JWNlGTTXVCpDQ",
  authDomain: "linkedin-clone-nm.firebaseapp.com",
  projectId: "linkedin-clone-nm",
  storageBucket: "linkedin-clone-nm.appspot.com",
  messagingSenderId: "91399058686",
  appId: "1:91399058686:web:4048d6c7b0399e5d10e1af"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};