import firebase from 'firebase'
import 'firebase/firebase-auth'

const config = require('../config')()
const fireConfig = config.fireConfig

// const fireConfig = {
//     apiKey: "AIzaSyCmyk_Xcy2zI3IP555UttY-buoWcUsNOCw",
//     authDomain: "nshop-774f5.firebaseapp.com",
//     databaseURL: "https://nshop-774f5.firebaseio.com",
//     projectId: "nshop-774f5",
//     storageBucket: "nshop-774f5.appspot.com",
//     messagingSenderId: "849695648530",
//     appId: "1:849695648530:web:da9db00c81031d070021cb"
//   };

  let fireApp, adminApp

  if(!fireApp && !firebase.apps.length) {
      fireApp = firebase.initializeApp(fireConfig)
      adminApp = firebase.initializeApp(fireConfig, 'fireAdmin')
  } else {
      fireApp = firebase.app()
      adminApp = firebase.app('fireAdmin')
  }

  export { fireApp, adminApp }