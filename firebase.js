import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzjMNo...",
  authDomain: "digitalcash-pro.firebaseapp.com",
  projectId: "digitalcash-pro",
  storageBucket: "digitalcash-pro.appspot.com",
  messagingSenderId: "1090954991543",
  appId: "1:1090954991543:web:86fc9a340ab1392c63a32",
  measurementId: "G-D4T576EMRR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
