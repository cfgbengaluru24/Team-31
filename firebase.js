import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "expense-9bfbf.firebaseapp.com",
  projectId: "expense-9bfbf",
  storageBucket: "expense-9bfbf.appspot.com",
  messagingSenderId: "155154390792",
  appId: "1:155154390792:web:6060c5d509bbf19328d6bd"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
