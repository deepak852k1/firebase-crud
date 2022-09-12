import firebase from 'firebase/app'
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyD-4vr9RPwiCIc5zkRiG6jrvwZXO0KTm8g",
    authDomain: "react-contact-app-4075f.firebaseapp.com",
    projectId: "react-contact-app-4075f",
    storageBucket: "react-contact-app-4075f.appspot.com",
    messagingSenderId: "754931837650",
    appId: "1:754931837650:web:1b1b7d1580098865875b0b",
    measurementId: "G-4WX1GJG7CB"
  };

  const fireDb= firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref(); 
