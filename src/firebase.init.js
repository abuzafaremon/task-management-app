import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbbvG5jNzhI24APxeg7zTbD01P7r4w3B0",
  authDomain: "emon-task-management.firebaseapp.com",
  projectId: "emon-task-management",
  storageBucket: "emon-task-management.appspot.com",
  messagingSenderId: "1078848248992",
  appId: "1:1078848248992:web:f432be5c6e520824f5fdc5",
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
