import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDD14VVuITdZiqZjML3zpojFHidMd4W05g",
  authDomain: "teamproject-6d5bd.firebaseapp.com",
  projectId: "teamproject-6d5bd",
  storageBucket: "teamproject-6d5bd.appspot.com",
  messagingSenderId: "907260419239",
  appId: "1:907260419239:web:b6cba0b109987951d70f82"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };