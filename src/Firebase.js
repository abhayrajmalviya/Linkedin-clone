import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/compat/auth"
// import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBk0WVa7Ghm3TEvd9kBfw5_7xzeMOxk4xs",
    authDomain: "linkedin-clone-by-abhay.firebaseapp.com",
    projectId: "linkedin-clone-by-abhay",
    storageBucket: "linkedin-clone-by-abhay.appspot.com",
    messagingSenderId: "480551676562",
    appId: "1:480551676562:web:b9d5fb1e102249dc66944b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
//   const storage = 

export {db,auth};