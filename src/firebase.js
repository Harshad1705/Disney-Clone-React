// import { firebase } from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyB8gNlI_helEv5oF3MlQV8oad7K2Y45_qY",
//   authDomain: "disneyplus-clone-76fc4.firebaseapp.com",
//   projectId: "disneyplus-clone-76fc4",
//   storageBucket: "disneyplus-clone-76fc4.appspot.com",
//   messagingSenderId: "1090558484049",
//   appId: "1:1090558484049:web:70b1421c85cc5e1440a270",
//   measurementId: "G-7NGHZ66LRF",
// };

// const firebaseApp = firebase.initialize(firebaseConfig);
// const db = firebaseApp.fireStore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage, db };
// export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB8gNlI_helEv5oF3MlQV8oad7K2Y45_qY",
  authDomain: "disneyplus-clone-76fc4.firebaseapp.com",
  projectId: "disneyplus-clone-76fc4",
  storageBucket: "disneyplus-clone-76fc4.appspot.com",
  messagingSenderId: "1090558484049",
  appId: "1:1090558484049:web:70b1421c85cc5e1440a270",
  measurementId: "G-7NGHZ66LRF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const storage = app.storage();
const db = getFirestore(app);

export { auth, provider, db };
export default db;
