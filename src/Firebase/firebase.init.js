import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCJNk8HcbNjUPfLqAAGQjTyHM7va5Rv-Ok",
  authDomain: "chat-bondhu.firebaseapp.com",
  projectId: "chat-bondhu",
  storageBucket: "chat-bondhu.appspot.com",
  messagingSenderId: "902377420148",
  appId: "1:902377420148:web:bf4430464e0d36f41b2821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;