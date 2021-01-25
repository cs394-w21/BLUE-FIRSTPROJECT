/*
Firebase config file
*/

import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBHNaPPd-QnKLjukEwOXlSDZe0NFqrGB8c",
    authDomain: "charitymatch-4ceb3.firebaseapp.com",
    databaseURL: "https://charitymatch-4ceb3-default-rtdb.firebaseio.com",
    projectId: "charitymatch-4ceb3",
    storageBucket: "charitymatch-4ceb3.appspot.com",
    messagingSenderId: "266528078583",
    appId: "1:266528078583:web:41f1122f3f547997c731f2",
    measurementId: "G-WV3LXEWQFD"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };