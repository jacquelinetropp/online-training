import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTqXM9ZqnN5lGlb_8pvWZBmbiukEmOfkM",
  authDomain: "online-training-a8dd5.firebaseapp.com",
  databaseURL: "https://online-training-a8dd5.firebaseio.com",
  projectId: "online-training-a8dd5",
  storageBucket: "online-training-a8dd5.appspot.com",
  messagingSenderId: "477136955225",
  appId: "1:477136955225:web:f016c14242443d7b6a8e48",
  measurementId: "G-VXRCMGW9TM",
};
// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
