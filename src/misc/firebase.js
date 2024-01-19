import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCQwLxOt_5X6h2gQ7vtVw15BjeamX_pkJo",
    authDomain: "chat-web-app-3817f.firebaseapp.com",
    projectId: "chat-web-app-3817f",
    storageBucket: "chat-web-app-3817f.appspot.com",
    messagingSenderId: "282672745640",
    appId: "1:282672745640:web:3510b450b7f15e5373869d"
  };


const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
//It will give us auth object that we can use to interact with firebase.