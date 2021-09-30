// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1nvPQuqaK8Nhqp0D4DLF5YydyIKUToqo",
    authDomain: "fir-auth-d8fd7.firebaseapp.com",
    projectId: "fir-auth-d8fd7",
    storageBucket: "fir-auth-d8fd7.appspot.com",
    messagingSenderId: "553869248046",
    appId: "1:553869248046:web:1eeb652645e751890e01bf"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}
const auth = firebase.auth();

export { auth }
