import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCvZ8v6rwwUZcFFT_l85QG3vqLB-66ZPsI",
    authDomain: "docs-samp.firebaseapp.com",
    projectId: "docs-samp",
    storageBucket: "docs-samp.appspot.com",
    messagingSenderId: "22438885323",
    appId: "1:22438885323:web:2cc0d9d0db6afe9574a84e"
};

const app = !firebase.apps.length
    ? firebase.initialize(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db }