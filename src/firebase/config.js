import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd_kNAIKjO_QkCbV_posvWboHTinMkgO0",
  authDomain: "vuex-4873d.firebaseapp.com",
  projectId: "vuex-4873d",
  storageBucket: "vuex-4873d.appspot.com",
  messagingSenderId: "1092827306662",
  appId: "1:1092827306662:web:0b6975ae18f47fe6ae3267",
};

//initailize firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();

export { auth };
