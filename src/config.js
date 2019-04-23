import firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = firebase.initializeApp ({
    apiKey: "AIzaSyCI6YK93l1Xww4djjKbMg_8S7ru1sG1Y7k",
    authDomain: "quiz-44ec0.firebaseapp.com",
    databaseURL: "https://quiz-44ec0.firebaseio.com",
    projectId: "quiz-44ec0",
    storageBucket: "quiz-44ec0.appspot.com",
    messagingSenderId: "773857975270"
  });
  const db = firebase.database(firebaseInfo)
  const config = Rebase.createClass(db)

 export const providers =  {
    'facebook': new firebase.auth.FacebookAuthProvider()
 }
  

export const auth = firebaseInfo.auth()
export default config