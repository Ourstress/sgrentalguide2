import React from 'react'
import app from 'firebase/app'
import 'firebase/auth' // import auth package from firebase

const FirebaseContext = React.createContext(null)

// Initialize Firebase
const config = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
}

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      app.initializeApp(config)
      this.auth = app.auth() // Instantiate auth package
      this.uiConfig = {
        // configure FirebaseUI
        signInFlow: 'popup',
        signInOptions: [app.auth.GoogleAuthProvider.PROVIDER_ID],
      }
    }
  }
}
export default Firebase
export { FirebaseContext }
