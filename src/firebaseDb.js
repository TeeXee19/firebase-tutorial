import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD4v9cKNSg5KZw9vkxU-mptDtSCMgj7kOU",
    authDomain: "vue-crud-e5f13.firebaseapp.com",
    databaseURL: "https://vue-crud-e5f13.firebaseio.com",
    projectId: "vue-crud-e5f13",
    storageBucket: "vue-crud-e5f13.appspot.com",
    messagingSenderId: "347658408913",
    appId: "1:347658408913:web:908538cfa30d8042ef86f0",
    measurementId: "G-8Z3Y0N06B0"
  }

firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore(); 
