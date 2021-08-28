import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBUzh3Fy4vf6dfROe4XaIAWf174BLuG3zM",
  authDomain: "chatghor-bd3ee.firebaseapp.com",
  projectId: "chatghor-bd3ee",
  storageBucket: "chatghor-bd3ee.appspot.com",
  messagingSenderId: "215741724060",
  appId: "1:215741724060:web:0507ebe65db5717f0f8459",
}).auth();