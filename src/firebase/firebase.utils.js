import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeuXbFaUtwSjr14egVeUVG2Jxu5i0Rx2U",
    authDomain: "crwn-db-64a21.firebaseapp.com",
    databaseURL: "https://crwn-db-64a21.firebaseio.com",
    projectId: "crwn-db-64a21",
    storageBucket: "crwn-db-64a21.appspot.com",
    messagingSenderId: "114020408898",
    appId: "1:114020408898:web:a48c15f80fccc59ec957db",
    measurementId: "G-P2577ZLRRB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;