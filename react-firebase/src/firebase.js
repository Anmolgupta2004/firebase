
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkY_GK4VDusJgoYPyJVxGMIcDBWQm-28I",
  authDomain: "management-platform-584fb.firebaseapp.com",
  projectId: "management-platform-584fb",
  storageBucket: "management-platform-584fb.firebasestorage.app",
  messagingSenderId: "270973307863",
  appId: "1:270973307863:web:4a725ec0d161615d5b5992",
  measurementId: "G-JLV19K4BZH",
  databaseURL:"https://management-platform-584fb-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);
