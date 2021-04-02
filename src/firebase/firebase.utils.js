import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAqgTJxUq7su4oknd24PIpMqvYG-rMnb50",
    authDomain: "crwn-db-ad8a2.firebaseapp.com",
    projectId: "crwn-db-ad8a2",
    storageBucket: "crwn-db-ad8a2.appspot.com",
    messagingSenderId: "522119279105",
    appId: "1:522119279105:web:e4a3d4cfb8e27cae308600",
    measurementId: "G-4L5Y59BGFN"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt:'select_acount'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase