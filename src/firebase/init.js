import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyARsxcAynoji1AkTIaKk3VJHacPoIfJpa8",
  authDomain: "arkamatch-459fa.firebaseapp.com",
  databaseURL: "https://arkamatch-459fa.firebaseio.com",
  projectId: "arkamatch-459fa",
  storageBucket: "arkamatch-459fa.appspot.com",
  messagingSenderId: "681992541270",
  appId: "1:681992541270:web:3a38b5cacf65db09fc57f7",
  measurementId: "G-BQD3Z7C482"
}

firebase.initializeApp(config)
