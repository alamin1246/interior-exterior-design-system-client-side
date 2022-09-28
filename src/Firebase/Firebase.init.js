// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBALt9po6RFPe2UWQNSl3QkvhLNN6kDe8",
  authDomain: "interior-exterior-design.firebaseapp.com",
  projectId: "interior-exterior-design",
  storageBucket: "interior-exterior-design.appspot.com",
  messagingSenderId: "850699907753",
  appId: "1:850699907753:web:558d8979ec6e6736a5afb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
