import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKWt4lOZmN5kRJsgIv8CQjMW6ppRwQ4MU",
  authDomain: "juanbaquiroga-react.firebaseapp.com",
  projectId: "juanbaquiroga-react",
  storageBucket: "juanbaquiroga-react.appspot.com",
  messagingSenderId: "944439824638",
  appId: "1:944439824638:web:52d4dfaa34d5b21b02d5af"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)