import * as firebase from "firebase/app";

export default async function initialize() {
  firebase.initializeApp({
    apiKey: "AIzaSyChk8GbPx2osHfIEOdN19J5O3uGN6-ltDg",
    authDomain: "petsite-bd39a.firebaseapp.com",
    databaseURL: "https://petsite-bd39a.firebaseio.com",
    projectId: "petsite-bd39a",
    storageBucket: "petsite-bd39a.appspot.com",
    messagingSenderId: "295821539839",
    appId: "1:295821539839:web:03b2aede5b7303bffb8fca"
  });
}