import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATVG4PZF5fffNg0Nx2bqxo8INsRfRa7jc",
  authDomain: "react-portfolio-grah.firebaseapp.com",
  projectId: "react-portfolio-grah",
  storageBucket: "react-portfolio-grah.appspot.com",
  messagingSenderId: "111888604370",
  appId: "1:111888604370:web:9a8632219099122494e10b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();