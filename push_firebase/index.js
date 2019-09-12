import firebase from "firebase";

var users = require('./data.json')

var firebaseConfig = {
  apiKey: "AIzaSyAkPUsePZZi8P9wsVvm4LP8jAEnMr97yzc",
  authDomain: "topfy-19758.firebaseapp.com",
  databaseURL: "https://topfy-19758.firebaseio.com",
  projectId: "topfy-19758",
  storageBucket: "",
  messagingSenderId: "106866858182",
  appId: "1:106866858182:web:e870836a7ff4242b415fc7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

users.forEach((user) => {
  firebase.auth().createUserWithEmailAndPassword(user, 'macdinh')
})