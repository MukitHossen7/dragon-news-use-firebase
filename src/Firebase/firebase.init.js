import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9i4doRyA3XbTZBsb-BSxadYMsZdUrNTI",
  authDomain: "dragon-news-3b16c.firebaseapp.com",
  projectId: "dragon-news-3b16c",
  storageBucket: "dragon-news-3b16c.firebasestorage.app",
  messagingSenderId: "55767164594",
  appId: "1:55767164594:web:34d7c4ec95d259169d4bab",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
