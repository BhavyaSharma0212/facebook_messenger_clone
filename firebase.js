import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp( {
    apiKey: "AIzaSyDzQaEjY7vMpIuAB_XdoaP4hDtrXC3wkjI",
    authDomain: "clonechat-162bb.firebaseapp.com",
    projectId: "clonechat-162bb",
    storageBucket: "clonechat-162bb.appspot.com",
    messagingSenderId: "27006609255",
    appId: "1:27006609255:web:72d6ab09fe8d3a1d47b1c2"
  }).auth();