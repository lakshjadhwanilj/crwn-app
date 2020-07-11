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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.error('Error creating user', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;