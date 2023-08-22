import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd6ZPQHOXqW-95mo2powJGGzj2uySpwQ8",
  authDomain: "entregafinalreactanderramirez.firebaseapp.com",
  projectId: "entregafinalreactanderramirez",
  storageBucket: "entregafinalreactanderramirez.appspot.com",
  messagingSenderId: "894379915015",
  appId: "1:894379915015:web:d363dc0bdf42cb2f1f77a2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
