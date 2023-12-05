import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCu-QXROwccYvES1Yt6hGjzrZNO8Idy7Pg",
    authDomain: "mychatapp-7fe8e.firebaseapp.com",
    projectId: "mychatapp-7fe8e",
    storageBucket: "mychatapp-7fe8e.appspot.com",
    messagingSenderId: "613481278612",
    appId: "1:613481278612:web:7b43f2b5981bfd01aa5881",
    measurementId: "G-0QEJD6ZNMJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;