import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectI,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  // apiKey: "AIzaSyA9i4doRyA3XbTZBsb-BSxadYMsZdUrNTI",
  // authDomain: "dragon-news-3b16c.firebaseapp.com",
  // projectId: "dragon-news-3b16c",
  // storageBucket: "dragon-news-3b16c.firebasestorage.app",
  // messagingSenderId: "55767164594",
  // appId: "1:55767164594:web:34d7c4ec95d259169d4bab",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
