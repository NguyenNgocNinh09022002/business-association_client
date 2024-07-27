// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALzZ3iv2IHUQpDuhzJg2tnh3-QVb5RpkE",
  authDomain: "hiephoidoannghiep.firebaseapp.com",
  projectId: "hiephoidoannghiep",
  storageBucket: "hiephoidoannghiep.appspot.com",
  messagingSenderId: "91183425326",
  appId: "1:91183425326:web:91bf376b32599b9387fcbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);