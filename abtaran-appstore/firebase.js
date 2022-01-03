import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyDNWsSoSsgrj-1kmGRGxp-_leANvg6dnLw",
  authDomain: "abtaran-be350.firebaseapp.com",
  projectId: "abtaran-be350",
  storageBucket: "abtaran-be350.appspot.com",
  messagingSenderId: "497027367367",
  appId: "1:497027367367:web:79e1eb89227505f15599e2"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
console.log("initializedApp")
}
const auth=firebase.auth()
const db=firebase.firestore()
const storage =firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
export {auth,db,storage,serverTimestamp}