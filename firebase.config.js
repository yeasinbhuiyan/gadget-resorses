// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCeuR6UsJNm6bMyK49S9xx4WVuRkzioUk",
  authDomain: "hero-gadget-bd805.firebaseapp.com",
  projectId: "hero-gadget-bd805",
  storageBucket: "hero-gadget-bd805.appspot.com",
  messagingSenderId: "274842256112",
  appId: "1:274842256112:web:45ec96d5140db681ee3835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app