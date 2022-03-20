import firebase from "firebase";
require("@firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxlyNGWlDyITXQJ5rBFB8pv0GYCfRgvj8",
  authDomain: "librarytransaction.firebaseapp.com",
  projectId: "librarytransaction",
  storageBucket: "librarytransaction.appspot.com",
  messagingSenderId: "88654401485",
  appId: "1:88654401485:web:2051473041624062a5fe84"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
