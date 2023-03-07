// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbqCuoAXk6ueDFFvGWGWL8rdHSlopm7ZU",
  authDomain: "crwn-clothing-db-22580.firebaseapp.com",
  projectId: "crwn-clothing-db-22580",
  storageBucket: "crwn-clothing-db-22580.appspot.com",
  messagingSenderId: "810615957939",
  appId: "1:810615957939:web:277e14e833a4e80f46c3c6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// ===============================================================================

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// ===============================================================================

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// ===============================================================================

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const useDocRef = doc(db, "users", userAuth.uid);
  console.log("User Documant Referance : ", useDocRef);

  const userSnapshort = await getDoc(useDocRef);
  console.log("User Documant Snapshort : ", userSnapshort);
  console.log(userSnapshort.exists());

  // If User Data Does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshort.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(useDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  // If user data exists
  // retun userDocRef
  return useDocRef;
};

// ===============================================================================

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
// ===============================================================================

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
