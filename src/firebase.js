import firebase from 'firebase'
require("dotenv").config();


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: REACT_APP_API_KEY,
//   authDomain: REACT_APP_DOMAIN,
//   databaseURL: REACT_APP_DATABASE_URL,
//   projectId: REACT_APP_PROJECT_ID,
//   storageBucket: REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_MESSAGING_ID,
//   appId: REACT_APP_APPID,
//   measurementId: REACT_APP_MEASUREMENT_ID,
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRg5kUqAMu9_CAfwrVXXoqsEouiSuLa_s",
  authDomain: "instagram-clone-9eee0.firebaseapp.com",
  databaseURL: "https://instagram-clone-9eee0.firebaseio.com",
  projectId: "instagram-clone-9eee0",
  storageBucket: "instagram-clone-9eee0.appspot.com",
  messagingSenderId: "218884752036",
  appId: "1:218884752036:web:19c20e4d37a482ca575c31",
  measurementId: "G-TQ6DG2VJ9N",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage }