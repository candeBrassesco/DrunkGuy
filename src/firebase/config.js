// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBagyEw3TIgxQh9oKAGWuMl-fwQ8WWyEJo",
  authDomain: "drunkguy-bc976.firebaseapp.com",
  projectId: "drunkguy-bc976",
  storageBucket: "drunkguy-bc976.appspot.com",
  messagingSenderId: "61790307158",
  appId: "1:61790307158:web:9a2607831a748099ae8cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const initFirebase = () => app