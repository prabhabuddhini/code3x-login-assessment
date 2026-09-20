import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsRjGMNFwnOGD7YnH-mcIs5T0wwZD4-eM",
  authDomain: "code3x-login-assessment-8d349.firebaseapp.com",
  projectId: "code3x-login-assessment-8d349",
  storageBucket: "code3x-login-assessment-8d349.firebasestorage.app",
  messagingSenderId: "160170460915",
  appId: "1:160170460915:web:7777e6471d190982245986"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);