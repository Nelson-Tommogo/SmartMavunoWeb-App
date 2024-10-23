import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyAOGays0durOIQvreckNfqgXRctgZZ1A5o",
  
    authDomain: "smartmavuno-ce7b3.firebaseapp.com",
  
    projectId: "smartmavuno-ce7b3",
  
    storageBucket: "smartmavuno-ce7b3.appspot.com",
  
    messagingSenderId: "235669549463",
  
    appId: "1:235669549463:web:c096ed71db89ee94ff54d2",
  
    measurementId: "G-PX8XNHDJJP"
  
  };  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
