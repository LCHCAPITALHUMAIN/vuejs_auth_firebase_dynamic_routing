import * as fb from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyAfSryJdIf1E1HWgommtQnBdnfdqgLjfXU",
  authDomain: "online-store-conversion.firebaseapp.com",
  databaseURL: "https://online-store-conversion.firebaseio.com",
  projectId: "online-store-conversion",
  storageBucket: "online-store-conversion.appspot.com",
  messagingSenderId: "173896780352",
  appId: "1:173896780352:web:e3eeb34f1db04d0b94eda5"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
