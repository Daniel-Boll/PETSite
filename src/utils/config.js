import * as firebase from "firebase/app";

export default async function initialize() {
  firebase.initializeApp({
    apiKey: "AIzaSyAApnJKqs_JQ54P7hHrwtr-GzwkDy_Oc9A",
    authDomain: "petsitetest-661d1.firebaseapp.com",
    databaseURL: "https://petsitetest-661d1.firebaseio.com",
    projectId: "petsitetest-661d1",
    storageBucket: "petsitetest-661d1.appspot.com",
    messagingSenderId: "964528762264",
    appId: "1:964528762264:web:9a547f108591b019e68fed"
  });
}