import * as firebase from "firebase/app";

export default async function initialize() {
  firebase.initializeApp({
    apiKey: "AIzaSyA1n_wzizEkAbU3edVrqpGy_g75wSff61A",
    authDomain: "petsite-30dfd.firebaseapp.com",
    databaseURL: "https://petsite-30dfd.firebaseio.com",
    projectId: "petsite-30dfd",
    storageBucket: "petsite-30dfd.appspot.com",
    messagingSenderId: "455770460245",
    appId: "1:455770460245:web:42ee9bcc1614cfe59244dc"
  });
}