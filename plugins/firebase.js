import firebase from 'firebase'

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

  let fireApp

  if(!fireApp && !firebase.apps.length) {
      fireApp = firebase.initializeApp(fireConfig)
  } else {
      fireApp = firebase.app()
  }

  export default fireApp