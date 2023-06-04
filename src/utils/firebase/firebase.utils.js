import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZP8RHfaqZxzBux0fHl0TXeXkoZva-_kg",
    authDomain: "crwn-clothing-db-14dd5.firebaseapp.com",
    projectId: "crwn-clothing-db-14dd5",
    storageBucket: "crwn-clothing-db-14dd5.appspot.com",
    messagingSenderId: "1004777788305",
    appId: "1:1004777788305:web:96f62c7c472be74cafc030"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);