import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDQk_UbmShSsQE7W4KAF2QMmdGEMLjim-g",
    authDomain: "goft-a2de7.firebaseapp.com",
    databaseURL: "https://goft-a2de7.firebaseio.com",
    storageBucket: "goft-a2de7.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;