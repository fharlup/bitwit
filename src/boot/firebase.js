import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWT8uWNTVIZO5Ue7uk85pn88XD1gt9h-8",
    authDomain: "bitwit-f103c.firebaseapp.com",
    projectId: "bitwit-f103c",
    storageBucket: "bitwit-f103c.appspot.com",
    messagingSenderId: "419871418773",
    appId: "1:419871418773:web:fe6f040584e8e4e7cdae9c",
    measurementId: "G-LRJPBFKMZ6"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db