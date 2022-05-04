import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBlLEUkYJe1Tzahico2Ua7Yb8YQ89YZlcs",
  authDomain: "bullshit-3f24f.firebaseapp.com",
  databaseURL: "https://bullshit-3f24f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bullshit-3f24f",
  storageBucket: "bullshit-3f24f.appspot.com",
  messagingSenderId: "1047412856059",
  appId: "1:1047412856059:web:bd63625871a34724668c5e",
  measurementId: "G-VY4SCRLFT4"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const firebaseDatabase=getDatabase(app);