import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6-DWFBxb_c7OxPNtEs46eLLP5SGYgUyE",
  authDomain: "fashionbot-56ceb.firebaseapp.com",
  projectId: "fashionbot-56ceb",
  storageBucket: "fashionbot-56ceb.appspot.com",
  messagingSenderId: "847929729367",
  appId: "1:847929729367:web:073a798c2787f5ea42de12"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)






