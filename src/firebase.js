// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLlb1Ljj9gjdNXAVkYdDpJrA8HRrQ9ozs",
  authDomain: "ffb-broker-website.firebaseapp.com",
  projectId: "ffb-broker-website",
  storageBucket: "ffb-broker-website.appspot.com",
  messagingSenderId: "777183042426",
  appId: "1:777183042426:web:4ef439959b05050852d4c3",
  measurementId: "G-F2GXJC7BDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app;