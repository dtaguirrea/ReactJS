import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA33DY4LnQY13Z1NEzw6rZ5wk2UEo-_fRQ",
  authDomain: "tutiendapokemon.firebaseapp.com",
  projectId: "tutiendapokemon",
  storageBucket: "tutiendapokemon.appspot.com",
  messagingSenderId: "220617303464",
  appId: "1:220617303464:web:f32caea41a23603d5c299d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)