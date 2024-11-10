import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrwb7oBUtuIqpMLVYn8Qd0aQYei44RieU",
    authDomain: "sign-up-of-firebase.firebaseapp.com",
    projectId: "sign-up-of-firebase",
    storageBucket: "sign-up-of-firebase.firebasestorage.app",
    messagingSenderId: "772201106144",
    appId: "1:772201106144:web:7f2aad973a9bc67fd7de85"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth;